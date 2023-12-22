import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { postComments ,getComments} from "../services/api";

const CommentsSec = ({ postId, user }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handlePostComment = async () => {
    if (newComment.trim() !== "") {
      try {
        const commentData = {
          postId: postId,
          user: user,
          text: newComment,
          date: new Date(),
        };

        // Assuming this is the correct function name
        await postComments(commentData);

        // Use the response from getComments to update the comments state
        

        // Clear the comment input
        setNewComment("");

        toast.success("Comment posted successfully");
      } catch (error) {
        console.error("Error posting comment:", error.message);
        toast.error("Failed to post comment. Please try again.");
      }
    }
  };
 useEffect(()=>{
   const displayCooment = async () =>{
    const response = await getComments(postId);
        setComments(response.data.comments);
   }
   displayCooment();
 },[])
 

  return (
    <div>
      <div className="mt-4">
        <textarea
          placeholder="Your comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md mb-2 text-black"
        />
        <button
          onClick={handlePostComment}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Post Comment
        </button>
        {comments.map((comment, index) => (
          <div key={index} className="mt-2">
            <strong>{comment.user}:</strong> {comment.text}
          </div>
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CommentsSec;
