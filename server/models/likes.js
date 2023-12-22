import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  postId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Reference to the Post model
  },
  user: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
    default: Date.now,
  },
});

const Like = mongoose.model("Like", likeSchema);

export default Like;
