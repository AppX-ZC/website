const mongoose = require('mongoose');
const validator = require('validator');

const hackathonUserSchema = new mongoose.Schema({
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
  interestedFields: {
    type: Array,
    required: [true, 'Please choose at least one field you are interested in']
  },
  major: {
    type: String,
    required: [true, 'Please tell us your major/focus area']
  },
  participatingReason: {
    type: String,
    required: [
      true,
      'Please tell us reason for participating in AppX 20 Hackathon'
    ]
  },
  haveTeam: {
    type: String,
    required: [true, 'Please tell us if you have a team']
  },
  teamName: {
    type: String
  },

  comments: {
    type: String
  },
  hearAboutUs: {
    type: String,
    required: [true, 'Please tell us how you hear about us']
  }
});

const HackathonUser = mongoose.model('HackathonUser', hackathonUserSchema);

module.exports = HackathonUser;
