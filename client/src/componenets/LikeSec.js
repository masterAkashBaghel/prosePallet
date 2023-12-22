// components/LikeSec.js
import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { postLikes, getAllLikes } from "../services/api";

const LikeSec = ({ user, postId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = async () => {
    try {
      // Perform the like operation
      await postLikes(user, postId);

      // Fetch the updated like count after the like operation
      const updatedCount = await getAllLikes(postId);
      setLikeCount(updatedCount);

      // Toggle the like status
      setIsLiked((prevIsLiked) => !prevIsLiked);
    } catch (error) {
      console.error('Error liking/unliking post:', error.message);
      // Handle the error as needed (e.g., show error message, revert like count)
    }
  };

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const count = await getAllLikes(postId);
        setLikeCount(count);
      } catch (error) {
        console.error('Error fetching likes:', error.message);
        // Handle the error as needed (e.g., show error message)
      }
    };

    fetchLikes();
  }, [postId]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <FaRegHeart
          className={`mr-2 text-blue-500 cursor-pointer ${
            isLiked ? "text-red-500" : ""
          }`}
          onClick={handleLike}
        />
        {likeCount > 0 && <span className="text-gray-600 font-bold mx-1">{likeCount}</span>}
        {isLiked ? "Unlike" : "Like"}
      </div>
    </div>
  );
};

export default LikeSec;