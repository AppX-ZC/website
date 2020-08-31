const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please provide us with your name']
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Please provide us with your email'],
    validate: [validator.isEmail, 'Please provide a vaild email']
  },
  phone: {
    type: Number,
    required: [true, 'Please provide us with your phone']
  },
  description: {
    type: String,
    trim: true
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
