const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Blog post must have a title']
    },
    body: {
      type: String,
      required: [true, 'Blog post must have a body'],
      trim: true
    },
    previewImg: {
      type: String
    },
    Images: {
      type: Array
    }
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model('Posts', postSchema);
module.exports = Post;
