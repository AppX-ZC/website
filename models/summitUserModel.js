const mongoose = require('mongoose');
const validator = require('validator');

const summitUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please tell us your email'],
    unique: [true, 'Your email is used, please register with another email'],
    validate: [validator.isEmail, 'Please provide a vaild email']
  },
  nationalID: {
    type: Number,
    unique: true,
    required: [true, 'Please tell us your national ID']
  },
  phone: {
    type: Number
  },
  governorate: {
    type: String,
    required: [true, 'Please provide your residence governorate']
  },
  academicBackground: {
    type: String,
    required: [true, 'Please provide a study level']
  },
  comments: {
    type: String
  },
  hearAboutUs: {
    type: String,
    required: [true, 'Please tell us how you hear about us']
  }
});

const SummitUser = mongoose.model('SummitUser', summitUserSchema);

module.exports = SummitUser;
