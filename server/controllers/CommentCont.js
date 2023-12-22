import Comments from '../models/comments.js';
import Like from "../models/likes.js";

export const postComment = async (req, res) => {
  try {
    const { postId, user, text } = req.body;

    if (!postId || !user || !text) {
      return res.status(400).json({ message: "Incomplete comment data" });
    }

    const newComment = new Comments({
      postId,
      user,
      text,
      date: new Date(),
    });

    await newComment.save();

    res.status(201).json({ message: "Comment posted successfully", comment: newComment });
  } catch (error) {
    console.error("Error posting comment:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



// for geting comments

export const getComment = async (req,res) => {
    try {
        const postId = req.params.postId;
        const comments = await Comments.find({ postId });
        res.json({ comments });
      } catch (error) {
        console.error('Error fetching comments:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}



// Post likes
export const postLikes = async (req, res) => {
  const {  user } = req.body;
  const postId = req.params.postId;
      
  try {
    // Check if the user has already liked the post
    const existingLike = await Like.findOne({ postId, user });

    if (existingLike) {
      // User has already liked the post, so unlike it
      await existingLike.deleteOne()
      res.status(200).json({ message: "Post unliked successfully" });
    } else {
      // User hasn't liked the post, so like it
      const newLike = new Like({ postId, user });
      await newLike.save();
      res.status(201).json({ message: "Post liked successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// getting all likes

export const getAllLikes = async (req, res) => {
  const postId = req.params.postId;

  try {
    // Find all likes for the specified post ID
    const likes = await Like.find({ postId });

    // Respond with the list of likes
    res.status(200).json({ likes });
  } catch (error) {
    console.error('Error getting likes:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};