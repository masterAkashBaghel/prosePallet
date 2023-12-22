import React from "react";
 import Footer from '../componenets/Footer'
import abut1 from "../Assets/about1.jpg";
// import abut2 from '../Assets/about2.jpg'
import abut2 from "../Assets/ab3.jpg";
import babu from "../Assets/babu.jpg";
import prsnhnt from "../Assets/prsnhnt.jpg";
import david from "../Assets/david.jpg";
import Contact from "./Contact";
const About = () => {
  return (
    <div className="mt-20">
      {/* about section div */}
      <div className="bg-[#F5B693]">
        <div className=" flex  justify-center items-center mx-20">
          {/* for image  */}
          <div className="m-5 w-[80%]">
            <img src={abut2} alr="about2" loading="lazy"></img>
          </div>
          {/* for text area */}
          <div className="mx-5">
            <h1 className=" font-bold text-4xl my-3 text-[#703233] text-center">
              ProsePallete
            </h1>
            <h2 className="font-semibold text-2xl text-[#672e2f] text-center my-2">
              <span style={{ fontStyle: "italic" }}>
                Unleash Your Creativity
              </span>{" "}
              <span style={{ fontFamily: "cursive" }}>ProsePallet</span> is
              Where Every Voice Finds Its Canvas.
            </h2>

            <p className="   text-[#94594d]  outline-purple-700 font-medium">
              ProsePallete is a dynamic platform that empowers users to express
              themselves through captivating blog posts and engaging content.
              Whether you're a seasoned writer or a budding storyteller, our
              user-friendly interface makes it easy to craft and share your
              narratives with the world. Connect with a vibrant community,
              explore diverse perspectives, and embark on a journey of
              creativity and self-expression.{" "}
            </p>
            <button className=" border m-5 px-4 py-2 ml-[30%] hover:rounded-full bg-[#E02600] text-white">
              Know More
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-[#388D80] flex flex-col justify-center items-center">
          {/* for text */}
          <h1 className=" text-4xl mt-10 font-bold text-white">Reviews</h1>
          <p className=" font-semibold text-2xl text-[#E02600]">
            What other People are saying about us !{" "}
          </p>
          
          <div className="w-[80%] flex gap-10  m-5">
            <div className=" border p-2 px-5  hello rounded-xl text-white bg-[#39a998] mb-5">
              <div>
                <img
                  className=" w-[150px] h-[150px] rounded-full hello mx-auto my-2 "
                  src={babu}
                  alt="babu"
                  loading="lazy"
                />
              </div>
              <strong>@Adarsh Singh</strong>
              <p className="font-semibold">
                {" "}
                ProsePallet is a hidden gem for bloggers! The platform's
                intuitive design makes it easy for me to express my thoughts.
                The variety of features, from seamless editing to a wide range
                of categories, caters to every blogger's needs. It's my go-to
                platform for sharing my creativity with the world.
              </p>
            </div>
            <div className=" border p-2 px-5  hello rounded-xl text-white bg-[#39a998]">
              <div>
                <img
                  className=" w-[150px] h-[150px] rounded-full hello mx-auto my-2"
                  src={prsnhnt}
                  alt="badavidbu"
                  loading="lazy"
                />
              </div>
              <strong>@Prashant Mishra</strong>
              <p className="font-semibold">
                ProsePallet has been a fantastic discovery for my writing
                journey. The interface is user-friendly, and the editing tools
                are top-notch. I love the sense of community it fosters among
                writers. However, a few more customization options for blog
                layouts would be the cherry on top. Overall, a great platform
                for aspiring writers.
              </p>
            </div>

            <div className=" border p-2 px-5  hello rounded-xl text-white bg-[#39a998]">
              <div>
                <img
                  className=" w-[150px] h-[150px] rounded-full hello mx-auto my-2"
                  src={david}
                  alt="david"
                  loading="lazy"
                />
              </div>
              <strong>@David Singh </strong>
              <p className="font-semibold">
                The ability to share my verses with a like-minded audience is
                priceless. The comment and like features create a supportive
                environment for writers. I only wish there were more
                poetry-centric categories. Nevertheless, a fantastic platform
                for poets and writers alike.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[80%] mx-auto justify-center items-center">
        {/* contact us */}
        <div className="w-[80%]">
          <img src={abut1} alt="abut" loading="lazy" />
        </div>
         <div className="w-full">
          <Contact/>
         </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
