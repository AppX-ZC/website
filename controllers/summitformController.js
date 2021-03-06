const User = require('../models/summitUserModel');
const Contact = require('../models/contactModel');
const sendEmail = require('../utils/email');
const catchAsync = require('../utils/catchAsync');

exports.register = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  sendEmail({
    from: '<appxzewailcity@gmail.com>',
    to: req.body.email,
    subject: 'AppX 20 | summit',
    text:
      'Thanks for filling out our form. We will send you the details as soon as possible.\n Best regards,\n AppX 20 team.'
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
