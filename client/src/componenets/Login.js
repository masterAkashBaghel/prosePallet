import React, {  useState ,useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../Assets/defaults.png";
import "../App.css";
import { SignUpuser, LoginUser } from "../services/api";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";

function Login({setAuthenticate}) {
  const [log, setLog] = useState(true);

  // State and event handlers for login form
  const loggedInusers = {
    email: "",
    password: "",
  };
  const [loginUsers, setLogIn] = useState(loggedInusers);

  const loginChange = (e) => {
    setLogIn({ ...loginUsers, [e.target.name]: e.target.value });
  };

  const {setAccount} = useContext(DataContext);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await LoginUser(loginUsers);
  
      if (response.data.accessToken) {
        toast.success("Login successful");
         
        sessionStorage.setItem('accessToken',  `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken',  `Bearer ${response.data.refreshToken}`);
        console.log(response.data.username ,response.data.name)
        setAccount({username: response.data.username, name: response.data.name});
        setAuthenticate(true);


         navigate(`/`);


      } else if (response.message === "Invalid email or password") {
        toast.error("Invalid email or password");
      } else {
        toast.error("Failed to log in");
      }
    } catch (error) {
      if (error.message === "Invalid email or password") {
        toast.error("Invalid email or password");
      } else {
        toast.error("Failed to log in");
      }
    }
  };
  
  
  

  // State and event handlers for sign-up form
  const signUpvalues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };
  const [signsupUsers, setSignUpUsers] = useState(signUpvalues);

  const changedInput = (e) => {
    setSignUpUsers({ ...signsupUsers, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    // Perform client-side validation for sign-up form
    if (
      !signsupUsers.name ||
      !signsupUsers.username ||
      !signsupUsers.email ||
      !signsupUsers.password
    ) {
      toast.error("Please fill in all fields");
    }
    if (signsupUsers.password.length < 8) {
      toast.error("Password must be at least 8 characters");
    } else {
      try {
        const response = await SignUpuser(signsupUsers);

        // Check if the response from the backend contains an error message
        if (response.data && response.data.message) {
          if (
            response.data.message ===
            "User with the same email or username already exists"
          ) {
            toast.success(
              "User with the same email or username already exists"
            );
          } else {
            toast.success("Sign-up successful");
            
            toggle();
            
          }
        }
      } catch (error) {
       if(error.message ==='User with this email or username already exists')
       {
        toast.error('User with this email or username already exists')
       }
       else{
        toast.error("Sign Up failed try again")
       }
      }
    }
  };

  const toggle = () => {
    setLog(!log);
  };

  return (
    <div>
      <div className="mt-[120px] rounded-xl flex items-center  justify-center w-[80%] mx-auto gap-2 hello">
        <div className="hidden md:block md:w-1/2 bg-cover bg-center rounded-xl">
          <img
            className="rounded-xl w-[500px] m-auto"
            src={logo}
            alt="logos"
            loading="lazy"
          />
        </div>
        {log ? (
          <div className="w-full md:w-1/2 flex items-center justify-center h-full mx-auto">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Log in to ProsePalette
                </h2>
              </div>
              <form
                className="mt-8 space-y-6 p-5"
                onSubmit={(e) => handleLoginSubmit(e)}
              >
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                       value={loginUsers.email}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      onChange={(e) => loginChange(e)}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                    value={loginUsers.password}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none mt-5 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      onChange={(e) => loginChange(e)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group mt-5 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div
                className="text-center text-blue-400 hover:text-blue-800 hover:cursor-pointer"
                onClick={toggle}
              >
                Don't have an account? Sign Up
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full md:w-1/2 flex items-center justify-center h-full mx-auto">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Sign up to ProsePalette
                </h2>
              </div>
              <form
                className="mt-8 space-y-6 p-5"
                onSubmit={(e) => handleSignUpSubmit(e)}
              >
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="name"
                      autoComplete="name"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Full name"
                      onChange={(e) => changedInput(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="username" className="sr-only">
                      username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      className="appearance-none mt-5 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Username"
                      onChange={(e) => changedInput(e)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none mt-5 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      onChange={(e) => changedInput(e)}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none mt-5 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      onChange={(e) => changedInput(e)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group mt-5 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <div
                className="text-center text-blue-400 hover:text-blue-800 hover:cursor-pointer"
                onClick={toggle}
              >
                Already Have Account? Log In
              </div>
            </div>
          </div>
        )}
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
}

export default Login;
