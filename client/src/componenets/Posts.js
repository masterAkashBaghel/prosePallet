import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiDeleteBin3Line } from "react-icons/ri";
import {   FaRegComment, FaRegShareSquare } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { MdEdit } from "react-icons/md";
import { saveEditedData, deleteBlog } from "../services/api";
import CommentsSec from "./CommentsSec";
import LikeSec from "./LikeSec";
import { FaUserCircle } from "react-icons/fa";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  const [commentSections, setCommentSections] = useState({});
  const { account } = useContext(DataContext);
  const [toggled, setToggled] = useState(false);

  const [edited, setEdited] = useState({});

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    getAllPosts();
  }, [category]);

  // to get all the posts
  const getAllPosts = async () => {
    const API_BASE_URL = "http://localhost:8000";
    let url = `${API_BASE_URL}/getAllBlog`;
    console.log(category, "akash");
    if (category) {
      url += `?category=${category}`;
    }

    try {
      const response = await axios.get(url);
      setPosts(response.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };

  function handlecomment(postId) {

    setCommentSections((prevSections) => ({
      ...prevSections,
      [postId]: !prevSections[postId],
    }));
  }



  //edit post details
  const changeControl = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };
  const handleEdit = (id) => {
    setToggled(!toggled);
    const editedBlogPost = posts.find((p) => p._id === id);
    setEdited(editedBlogPost);
  };

  const saveBlogsData = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = {
        ...edited, // Spread the properties of the edited post
        createdTime: new Date(), // Update the created time here if needed
      };

      // Make sure to include the post ID in the updated data
      updatedPost._id = edited._id;

      console.log(updatedPost);
      await saveEditedData(updatedPost, edited._id);
      // const updatedPosts = await getAllPosts(); // Assuming you have a function to fetch all posts
      //setPosts(updatedPost);
      toast.success("Blog updated successfully");
      getAllPosts();
      setToggled(false); // Close the modal after saving
    } catch (error) {
      console.error("Error while updating blog:", error.message);
      toast.error("Failed to save blog. Please try again.");
    }
  };

  // deleteing posts
  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      // If the deletion is successful, show a success toast
      toast.success("Blog post deleted successfully");
      getAllPosts();
    } catch (error) {
      // If there's an error during deletion, show an error toast
      toast.error("Failed to delete blog post. Please try again.");
    }
  };

  const handleshare =()=>{
    toast.success("Share feature Coming Soon!");
  }

  return (
    <div className=" bg-[#B1CBDC] mt-20">
      <div className=" flex justify-center items-center bg-[#004B84]">
        <h2 className="text-4xl my-10 text-white opacity-70 font-semibold">
            <span>{category}</span> Posts
        </h2>
      </div>

      <div className="w-[45%] mx-auto mt-5">
        <div className="grid grid-cols-1 gap-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className="bg-white p-6 rounded-md shadow-md">
                <div className="flex items-center mb-4 justify-between">
                  {/* Replace the following div with your icon and customize the styles */}
                  <div className="flex gap-3">
                    <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className=" text-4xl text-blue-600"><FaUserCircle /></span>
                    </div>
                    <div className=" ">
                      <h3 className="text-lg font-semibold">{post.username}</h3>
                      <h4 className="text-md font-semibold opacity-70">
                        {post.categories}
                      </h4>
                    </div>
                  </div>

                  {account.username === post.username && (
                    <div className=" cursor-pointer text-2xl flex gap-3">
                      <div className=" hover:text-red-600 text-red-500 cursor-pointer">
                        <RiDeleteBin3Line
                          onClick={() => handleDelete(post._id)}
                        />
                      </div>
                      <MdEdit onClick={() => handleEdit(post._id)} />
                    </div>
                  )}
                  {toggled && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col z-30">
                      <div className="bg-white p-8 rounded-md flex justify-center items-center  ">
                        
                        <div className="  w-[50%]  rounded-md">
                          <img
                            className=" rounded-xl"
                            src={post.picture}
                            alt="imloogo"
                            loading="lazy"
                          ></img>
                        </div>

                        <form
                          className="w-3/5 p-8 rounded-md text-white "
                          onSubmit={(e) => saveBlogsData(e)}
                        >
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <button
                              onClick={() => setToggled(false)}
                              className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
                            >
                              Close
                            </button>
                          </div>

                          <div>
                            <label htmlFor="title">Title of Blog</label>
                            <input
                              value={edited.title}
                              type="text"
                              id="title"
                              placeholder="Enter title of Blog"
                              name="title"
                              onChange={(e) => changeControl(e)}
                              className="w-full p-2 border border-gray-400 rounded-md mb-4 text-black"
                            />
                          </div>
                          <div>
                            <label htmlFor="description">Your Story</label>
                            <textarea
                              value={edited.description}
                              placeholder="Write Your Story"
                              name="description"
                              onChange={(e) => changeControl(e)}
                              className="w-full p-2 border border-gray-400 rounded-md text-black"
                              style={{ width: "100%" }}
                            ></textarea>
                          </div>

                          <button className="border rounded-md p-3  mt-3 hover:text-green-700 text-green-500">
                            Update
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
                <img
                  src={post.picture || "https://placekitten.com/300/200"}
                  alt={post.title}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h1 className=" font-semibold text-2xl opacity-75">
                  {post.title}
                </h1>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500">
                      {new Date(post.createdTime).toDateString()}
                    </p>
                  </div>
                  <div className=" h-5 text-black"></div>
                </div>

                <div className="flex items-center mt-4 gap-5 justify-evenly">
                  {/* <div className=" flex justify-center items-center">
                    {" "}
                    <FaRegHeart className="mr-2 text-blue-500 cursor-pointer" />
                    Like
                  </div> */}
                  <LikeSec user={account.username} postId={post._id} />
                  <div
                    className=" flex justify-center items-center cursor-pointer"
                    onClick={()=>handlecomment(post._id)}
                  >
                    {" "}
                    <FaRegComment className="mr-2 text-blue-500 cursor-pointer" />
                    Comments
                  </div>
                  <div className=" flex justify-center items-center cursor-pointer" onClick={handleshare}>
                    {" "}
                    <FaRegShareSquare className="mr-2 text-blue-500 cursor-pointer" />
                    Share
                  </div>
                </div>

                {commentSections[post._id] &&  (
                  <CommentsSec postId={post._id} user={account.username}></CommentsSec>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white p-6 rounded-md shadow-md">
              <p className="text-gray-600">No posts to display.</p>
            </div>
          )}
        </div>
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

export default Posts;
