const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const memeSchema = new Schema({
  name: String,
  path: String,
  description: String,
  _owner: {type: Schema.Types.ObjectId, ref: "User"},
  _likes: [{type: Schema.Types.ObjectId, ref: "User"}],
  _favorites: [{type: Schema.Types.ObjectId, ref: "User"}],
  _comments: [{
    text: String, 
    _commentOwner: {type: Schema.Types.ObjectId, ref: "User"},
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Meme = mongoose.model('Meme', memeSchema);
module.exports = Meme;