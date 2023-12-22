import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    username: {
        type: String,
         
        // Remove the unique constraint
    },
    picture: {
        type: String,
    },
    createdTime: {
        type: Date,
        required: true,
    },
    categories: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like',
    }],
});

const Post = mongoose.model("Post", postSchema);
export default Post;
