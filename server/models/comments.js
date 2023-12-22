import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  postId: {
    required: true,
    type: String,
  },
  user: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,  // Fix the type to Date
  },
});

const Comments = mongoose.model("comments", commentSchema);
export default Comments;
