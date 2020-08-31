const SummitUser = require('../models/summitUserModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await SummitUser.find();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await SummitUser.findById(req.params.id);

  if (!user)
    return next(new AppError('No Hackathon user found with this ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await SummitUser.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser
    }
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const updatedUser = await SummitUser.findByIdAndUpdate(
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
  await SummitUser.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      user: null
    }
  });
});
