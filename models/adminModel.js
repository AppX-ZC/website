const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide us with your email'],
    validate: [validator.isEmail, 'Please provide us a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide us with your password'],
    select: false
  },
  passwordChangedAt: {
    type: Date
  }
});

adminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

adminSchema.methods.correctPassword = async function(
  unHashedPassword,
  HashedPassword
) {
  return await bcrypt.compare(unHashedPassword, HashedPassword);
};

adminSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return changedTimestamp > JWTTimestamp;
  }
  return false;
};

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
