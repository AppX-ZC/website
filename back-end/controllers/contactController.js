const Contact = require('../models/contactModel');
const catchAsync = require('../utils/catchAsync');

module.exports = catchAsync(async (req, res, next) => {
  const contact = await Contact.create(req.body);

  res.status('201').json({
    status: 'success',
    data: {
      contact
    }
  });
});
