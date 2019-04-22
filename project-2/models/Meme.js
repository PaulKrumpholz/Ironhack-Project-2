const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const memeSchema = new Schema({
  picture: String,
  description: String,
  owner: [
    {},
  ],
  likes: [
    {},
  ],
  favorites: [
    {},
  ],
  comments: [
    {},
  ]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Meme = mongoose.model('Meme', memeSchema);
module.exports = Meme;