const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({

  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  profilePic: String,
  _friends: [
    {type: Schema.Types.ObjectId, ref: "User"},
  ],
  _favouriteMemes: [
    {type: Schema.Types.ObjectId, ref: "Meme"},
  ],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
