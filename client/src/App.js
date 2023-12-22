import React, { useState } from "react";
import Login from "./componenets/Login";
import DataProvider from "./context/DataProvider";
import Home from "./componenets/Home";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Category from "./componenets/Category";
import CreatePost from "./componenets/CreatePost";
import Posts from "./componenets/Posts";
import About from "./componenets/About";
const PrivateRoute = ({ autenticate, ...props }) => {
  return autenticate ? (
    <>
     <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
function App() {
  const [autenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <DataProvider>
       
        <Routes>
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route path="/" element={<PrivateRoute autenticate={autenticate} />}>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path ='/posts' element={<Posts />} />
            <Route path ='/about' element={<About />} />


          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
