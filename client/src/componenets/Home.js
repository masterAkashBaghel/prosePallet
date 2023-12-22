import React from "react";
import hero from "../Assets/hero.jpg";
import pens from "../Assets/pens.png";
import writer from '../Assets/writer.jpg'
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const tocategories = () =>{
    navigate('/category');
  }
  return (
    
    <div>
      <div className=" flex justify-center items-center mx-20 mt-20">
        <div className="  ">
          <h1 className=" font-semibold text-2xl m-2 mx-auto text-center">
            Welcome to{" "}
            <span className=" font-bold text-[#014073] opacity-70 text-3xl">
              ProsePalette
            </span>{" "}
            Where Stories Come Alive!
          </h1>
          <p className=" font-semibold opacity-70  text-base">
            Step into a world of diverse narratives, ideas, and inspiration.
            Discover thought-provoking tales that cater to every interest. From
            lifestyle and tech to culture and wellness, explore a sea of stories
            waiting for you. Join a vibrant community of writers and readers
            passionate about new narratives and engaging discussions. Celebrate
            the art of storytelling and share your unique voice with us. Let's
            explore this world of words together!"
          </p>
          <button className=" button-52 mx-auto ml-[10rem] w-[30%] mt-5" onClick={tocategories}>
            Pen Your words
          </button>
        </div>
        <div>
          <img src={hero} alt="herosec" loading="lazy"></img>
        </div>
      </div>

      {/* another section */}
      <div  className=" w-full flex  justify-evenly items-center   bg-[#388D80]" >
        {/* image part */}
        <div className=" w-[40%]">
          <img className="   h-[400px]" src={pens} alt="pen" loading=" lazy"></img>
        </div>
        {/* text part */}
        <div className=" w-[50%]">
          <h1  className=" font-bold  text-3xl m-2 mx-auto text-center text-[#F7AD7C]" >
            Discover the World of Writing 
          </h1>
          {/* <p className="font-bold text-[#014073] opacity-70 text-3xl mx-auto text-center my-3">Your Stories, Your Voice</p> */}
          <p  className="font-semibold    text-base text-white mr-5">
            Pen down your thoughts, express your opinions, and share your
            expertise. Whether you're an aspiring writer or a seasoned
            wordsmith, ProsePalette welcomes all voices. Embrace the freedom to
            contribute, engage, and learn. Join us in celebrating the diversity
            of the written word. Embrace the world of writing and become part of
            an ever-inspiring literary community.
          </p>
        </div>
      </div>

      {/* last div */}
      <div className=" flex bg-[#FFF1E8] justify-center items-center">
        {/* text part */}
        <div className=" w-[50%]">
         <h1 className=" font-bold  text-3xl m-2 mx-auto text-center  ">Unleash Your Creativity</h1>
         <p className="font-semibold    text-base ">Step into a world where your words paint the canvas. ProsePalette is your canvas, awaiting the strokes of your creativity. Write and publish captivating blogs and articles on an array of genres:</p>
         <p> <span className=" text-[#388D80] text-2xl font-semibold">Travel Adventures</span> <span className=" text-[#DE8B55] text-2xl font-semibold">Technology Insights</span> <span className=" text-[#FF8000] text-2xl font-semibold">Literary Musings</span> <span className=" font-semibold   text-blue-500">and many more...</span></p>

         <button className="   border mt-6 bg-[#388D80] text-white hover:scale-105 p-3 mx-auto  " onClick={tocategories}>  Create Your Blog</button>
        </div>
        {/* image part */}
        <div className=" w-[40%]">
          <img className="h-[400px]" src ={writer} alt="writer " loading="lazy"></img>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
