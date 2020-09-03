const HackathonUser = require('../models/hackathonUserModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  // console.log(req.query);
  const queryObj = { ...req.query };
  const excludedQueries = ['limit', 'sort', 'fields', 'page'];
  excludedQueries.forEach(el => delete queryObj[el]);

  const users = await HackathonUser.find(queryObj);
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await HackathonUser.findById(req.params.id);

  if (!user)
    return next(new AppError('No Hackathon user found with this id', 404));

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await HackathonUser.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser
    }
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const updatedUser = await HackathonUser.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidators: true,
      new: true
    }
  );

  if (!updatedUser)
    return next(new AppError('No Hackathon user found with this ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  await HackathonUser.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      user: null
    }
  });
});
