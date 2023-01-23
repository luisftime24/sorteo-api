const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    userId: {
      type: mongoose.Types.ObjectId,
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = mongoose.model('posts', PostSchema)
