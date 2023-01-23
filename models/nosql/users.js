const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      unique: true,
    },
    role: {
      type: ['user', 'admin'],
      default: 'user',
    },
    bio: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = mongoose.model('users', UserSchema)
