import Post from '../models/post.js';
import mongoose from 'mongoose';

export const savePost = async (req, res) => {
    try {
        const { title, description, username, picture, createdTime, categories } = req.body;
        
         
        const newPost = new Post({
            title,
            description,
            username,
            picture,
            createdTime: createdTime || new Date(),
            categories,
        });

        const savedPost = await newPost.save();
        // res.status(201).json({ message: 'Post saved successfully', savedPost });
        res.status(201).json({ message: 'Post saved successfully', savedPost });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save the post', error: error.message });
    }
};


// for getting all the post
// for getting all the post
export const getallBlogs = async (req, res) => {
  try {
    const category = req.query.category; // Use req.query to get the category from the query parameters
    let query = {};
    
    if (category) {
      query = { categories: category };
      
    }

    const allPosts = await Post.find(query);
    res.status(200).json({ posts: allPosts });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ message: 'Failed to fetch posts', error: error.message });
  }
};


//for updating the blog post
 

export const editedPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const editedData = req.body;

    // Validate if postId is a valid ObjectId (assuming MongoDB and Mongoose)
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ message: 'Invalid post ID' });
    }

    // Check if the post with the given ID exists
    const existingPost = await Post.findById(postId);

    if (!existingPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Update the post with the edited data
    existingPost.title = editedData.title || existingPost.title;
    existingPost.description = editedData.description || existingPost.description;
     
    // Add other fields as needed

    // Save the updated post to the database
    await existingPost.save();

    res.status(200).json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error('Error updating blog post:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// for deleteing the post

export const deleteBlog = async (req, res) => {
  const postId = req.params.postId;

  try {
    
    const deletedPost = await Post.deleteOne({ _id: postId });

    if (deletedPost.deletedCount === 1) {
      // Post was deleted successfully
      res.status(200).json({ message: "Blog post deleted successfully" });
    } else {
      // No post found with the given ID
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    console.error('Error deleting blog post:', error.message);
    res.status(500).json({ message: 'Failed to delete blog post', error: error.message });
  }
};



