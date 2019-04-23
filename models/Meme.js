const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const memeSchema = new Schema({
  name: String,
  picture: String,
  path: String,
  description: String,
  _owner: {type: Schema.Types.ObjectId, ref: "User"},
  _likes: {type: Schema.Types.ObjectId, ref: "User"},
  _favorites: {type: Schema.Types.ObjectId, ref: "User"},
  _comments: [{
    type: String,
    type: Schema.Types.ObjectId, ref: "User"
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Meme = mongoose.model('Meme', memeSchema);
module.exports = Meme;