const User = require('../models/summitUserModel');
const Contact = require('../models/contactModel');
const sendEmail = require('../utils/email');
const catchAsync = require('../utils/catchAsync');

exports.register = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  sendEmail({
    from: '<appxzewailcity@gmail.com>',
    to: req.body.email,
    subject: 'You are successfuly registed with us, Thanks',
    text:
      'BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA'
  });

  res.status(201).json({
    status: 'success',
    data: {
      user
    }
  });
});

exports.contactUs = catchAsync(async (req, res, next) => {
  const contact = await Contact.create(req.body);

  res.status('201').json({
    status: 'success',
    data: {
      contact
    }
  });
});
