import axios from "axios";
import { getAccessToken } from "../utils/commonUtil";



export const SignUpuser = async (data) => {
     
    const API_BASE_URL = "http://localhost:8000";  
    const url = `${API_BASE_URL}/signup`;  
    try {
        return await axios.post(url, data);
    } catch (error) {
        if (error.response && error.response.data) {
            throw error.response.data;
          } else {
            throw new Error("Failed to log in");
          }
    }
};

export const LoginUser = async (data) => {
    const API_BASE_URL = "http://localhost:8000";
    const url = `${API_BASE_URL}/login`;
    try {
      return await axios.post(url, data);
    } catch (error) {
      if (error.response && error.response.data) {
        throw error.response.data;
      } else {
        throw new Error("Failed to log in");
      }
    }
  };

  export const uploadFile = async (data) => {
    const API_BASE_URL = "http://localhost:8000";
    const url = `${API_BASE_URL}/upload/files`;
  
    try {
      const response = await axios.post(url, data);
      return response.data; // If response data is required
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(`Failed to upload image: ${error.response.data}`);
      } else {
        throw new Error("Failed to upload image");
      }
    }
  };


  //for saving the blog post
  
export const saveData = async (data) => {
  const API_BASE_URL = "http://localhost:8000";
  const url = `${API_BASE_URL}/saveBlog`;

  try {
    const accessToken = getAccessToken(); // Get the access token

    const config = {
      headers: {
        Authorization: `${accessToken}`, // Include the "Bearer" prefix
      },
    };
    
    // console.log('Access Token:', accessToken);
    return await axios.post(url, data, config);
  } catch (error) {
    if (error.response && error.response.data) {
      // If the response contains a message, use it
      throw new Error(`Failed to save blog: ${error.response.data.message}`);
    } else if (error.message) {
      // If it's an Axios error, use the error message
      throw new Error(`Failed to save blog: ${error.message}`);
    } else {
      // For any other unexpected errors
      throw new Error("Failed to save blog: Unknown error");
    }
  }
};

// edited blog data




// for getting all the posts
export const saveEditedData = async (data, postId) => {
  const API_BASE_URL = "http://localhost:8000";
  const url = `${API_BASE_URL}/saveEditedBlog/${postId}`; // Include postId in the URL

  try {
    const accessToken = getAccessToken(); // Get the access token

    const config = {
      headers: {
        Authorization: `${accessToken}`, // Include the "Bearer" prefix
      },
    };

    // console.log('Access Token:', accessToken);
    return await axios.post(url, data, config);
  } catch (error) {
    if (error.response && error.response.data) {
      // If the response contains a message, use it
      throw new Error(`Failed to save blog: ${error.response.data.message}`);
    } else if (error.message) {
      // If it's an Axios error, use the error message
      throw new Error(`Failed to save blog: ${error.message}`);
    } else {
      // For any other unexpected errors
      throw new Error("Failed to save blog: Unknown error");
    }
  }
};



export const deleteBlog = async (postId) => {
  const API_BASE_URL = "http://localhost:8000";
  const url = `${API_BASE_URL}/deleteBlog/${postId}`;

  try {
    const accessToken = getAccessToken(); 
    const config = {
      headers: {
        Authorization: accessToken,  
      },
    };

    return await axios.delete(url, config);
  } catch (error) {
    if (error.response && error.response.data) {
      // If the response contains a message, use it
      throw new Error(`Failed to delete blog: ${error.response.data.message}`);
    } else if (error.message) {
      // If it's an Axios error, use the error message
      throw new Error(`Failed to delete blog: ${error.message}`);
    } else {
      // For any other unexpected errors
      throw new Error("Failed to delete blog: Unknown error");
    }
  }
};


//fr posting comments

export const postComments = async (data)=>{
  const API_BASE_URL = "http://localhost:8000";
  const url = `${API_BASE_URL}/postComment`;
  try{
    const accessToken = getAccessToken(); 
    const config = {
      headers: {
        Authorization: accessToken,  
      },
    };
    return await axios.post(url, data,config)
  }catch(error){
    if (error.response && error.response.data) {
      // If the response contains a message, use it
      throw new Error(`Failed to comment on blog: ${error.response.data.message}`);
    } else if (error.message) {
      // If it's an Axios error, use the error message
      throw new Error(`Failed to comment on  blog: ${error.message}`);
    } else {
      // For any other unexpected errors
      throw new Error("Failed tocomment: Unknown error");
    }
  }
}



// retriving comments

export const getComments = async (postId)=>{
  const API_BASE_URL = "http://localhost:8000";
  const url = `${API_BASE_URL}/getComment/${postId}`;
  try{
    const accessToken = getAccessToken(); 
    const config = {
      headers: {
        Authorization: accessToken,  
      },
    };
    return await axios.get(url, config);
  }catch(error){
    if (error.response && error.response.data) {
      // If the response contains a message, use it
      throw new Error(`error getting comments  ${error.response.data.message}`);
    } else if (error.message) {
      // If it's an Axios error, use the error message
      throw new Error(`error: ${error.message}`);
    } else {
      // For any other unexpected errors
      throw new Error("errror getting tocomment: Unknown error");
    }
  }
}



// Liking the post
export const postLikes = async (user, postId) => {
  const API_BASE_URL = "http://localhost:8000";
  const url = `${API_BASE_URL}/postLikes/${postId}`;

  try {
    const accessToken = getAccessToken();
    const config = {
      headers: {
        Authorization: accessToken,
      },
    };

    // Assuming the server expects data in the request body for liking a post
    const requestData = {
      user: user,
      
    };

    return await axios.post(url, requestData, config);
  } catch (e) {
    // Handle errors if needed
    console.error("Error posting likes:", e);
    throw e; // Re-throw the error to propagate it
  }
};




// gettingall likes 

export const getAllLikes = async (postId) => {
  const API_BASE_URL = 'http://localhost:8000'; 
  const url = `${API_BASE_URL}/getAllLikes/${postId}`;

  try {
    const accessToken = getAccessToken();  

    const config = {
      headers: {
        Authorization: `${accessToken}`,  
      },
    };

    const response = await axios.get(url, config);
    return response.data.likes;  
  } catch (error) {
     
    console.error('Error getting likes:', error.message);
    throw new Error('Failed to get likes. Please try again.');
  }
};