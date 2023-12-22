import React, { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import createPo from "../Assets/createPo.jpg";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { uploadFile, saveData } from "../services/api";
import { useNavigate } from "react-router-dom";
import Posts from'../componenets/Posts'

const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "",
  createdTime: new Date(),
  categories: "",
};

const CreatePost = () => {
  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const { account } = useContext(DataContext);
  const nav = useNavigate();
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const changeControl = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        try {
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);

          // Call the upload API
          const response = await uploadFile(data);
          post.picture = response.imageUrl;
          setPost({ ...post });
          
           
        } catch (error) {
          console.error("Failed to upload image:", error);
        }
      }
    };

    getImage();
    
    post.categories = category;
    post.username = account.username;
  }, [file, category, account.username]);

  const saveBlogsData = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = {
        ...post,
        createdTime: new Date(), // Update the created time here if needed
      };
      //here i am getting the account details
      // console.log(account, " this is account")

      console.log(updatedPost);
      await saveData(updatedPost);
      toast.success("Blog saved successfully");
      setIsModalOpen(false); // Close the modal after saving
      nav('/posts');
    } catch (error) {
      console.error("Error while saving blog:", error.message);
      toast.error("Failed to save blog. Please try again.");
    }
  };

  return (
    <div className="flex flex-col">
      {/* create section */}
      <div className=" flex flex-col create-section  justify-center items-center bg-[#ECD0A9]     mt-20 z-30" >
        <div>
          <img
            className=" w-[400px]"
            src={createPo}
            alt="createpost"
            loading="lazy"
          ></img>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-2xl font-bold text-center m-2 text-[#3C6D57]">
            Pen down Your thaughts
          </h1>
          <p className=" font-semibold text-xl">
            Words are the puzzle pieces, ink the vessel of desire—exploring vast
            dimensions.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#43e6c0] text-white px-4 py-2 rounded-md m-2 mt-3  items-center w-[30%]"
          >
            Create
          </button>
        </div>
      </div>
      <div className="flex justify-center bg-[#3C6D57]">
        {/* hereee  */}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center flex-col z-30">
            
            <div className="bg-white p-8 rounded-md flex justify-center items-center  ">
             
              <div className="  w-[50%]  rounded-md">
                <img  className=" rounded-xl" src={url} alt="imloogo" loading="lazy"></img>
              </div>
              
              <form
                className="w-3/5 p-8 rounded-md text-white "
                onSubmit={(e) => saveBlogsData(e)}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <label
                    htmlFor="fileInput"
                    className="flex items-center gap-3"
                  >
                    <BiMessageSquareAdd className="text-4xl cursor-pointer text-black" />
                    <span className="font-semibold text-black">Upload Banner</span>
                  </label>
                  <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
              >
                Close
              </button>
                 
                </div>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <div>
                  <label htmlFor="title">Title of Blog</label>
                  <input
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
                    placeholder="Write Your Story"
                    name="description"
                    onChange={(e) => changeControl(e)}
                    className="w-full p-2 border border-gray-400 rounded-md text-black"
                    style={{ width: "100%" }}
                  ></textarea>
                </div>

                <button className="border rounded-md p-3  mt-3 hover:text-green-700 text-green-500">Publish</button>
              </form>
             
              
            </div>
          </div>
        )}
      </div>
        

{/* all posts */}
      <div>

          <Posts  />
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

export default CreatePost;
