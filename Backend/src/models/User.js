const mongoose = require('mongoose');
const bcrypt =require('bcrypt')
const Student =require('./Student');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    default: 'student',
  },
});

// Password hashing middleware
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//middleware to save the user whose role is student in student schema
UserSchema.post('save', async function (doc, next) {
  if (doc.role === 'student') {
    await Student.create({ user: doc._id });
  }
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
