const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const catchAsync = require('../utils/catchAsync');
const Admin = require('./../models/adminModel');
const AppError = require('./../utils/appError');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const createSendToken = (admin, statusCode, req, res) => {
  const token = signToken(admin._id);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });

  //Remove password form the output
  admin.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      admin
    }
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  )
    token = req.headers.authorization.split(' ')[1];

  if (!token)
    return next(
      new AppError('Your are not logged in! Please log in to get access', 401)
    );

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await Admin.findById(decoded.id);
  if (!currentUser)
    return next('The user belonging to this token are not exist', 401);

  if (currentUser.changedPasswordAfter(decoded.iat))
    return next('User recently changed the password. please log in again', 401);

  req.user = currentUser;
  next();
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError('Please provide email and password', 400));

  const admin = await Admin.findOne({ email }).select('+password');
  if (!admin || (await !admin.correctPassword(password, admin.password)))
    return next(new AppError('Incorrect password or email', 401));

  createSendToken(admin, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie('jwt', 'You are logged out', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  console.log('You are logged out');
  res.status(200).json({ status: 'success' });
};
