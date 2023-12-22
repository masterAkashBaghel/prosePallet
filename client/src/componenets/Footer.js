import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
 

const Footer = () => {
  return (
    <div className="bg-[#FF8000]">
      <div className="w-[90%] mx-auto   py-2">
        <div className="flex flex-col md:flex-row p-5 gap-4">
          {/* location */}
          <div className="w-full md:w-[30%] flex flex-col justify-center items-center mb-4 md:mb-0">
            <h1 className="font-bold text-xl">LOCATION</h1>
    <div className=" text-white ml-7">
    <p >Akash Kumar Singh</p>

<p> Gorakhpur Uttar Pradesh</p>
<p>India, 274702</p>
    </div>
          </div>

          {/* contact */}
          <div className="w-full md:w-[30%] flex flex-col justify-center items-center mb-4 md:mb-0">
            <h1 className="font-bold text-xl m-5">AROUND THE WEB</h1>
            <ul className="flex gap-5 mt-2">
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-xl" />
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/master-akash-kumar-singh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className=" text-xl"> </FaLinkedinIn>
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://github.com/masterAkashBaghel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className=" text-xl"></FaGithub>
              </a>
            </li>
            <li className=" w-[37px] h-[37px] bg-white rounded-full flex items-center justify-center">
              <a
                href="https://whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className=" text-xl"></FaWhatsapp>
              </a>
            </li>
              {/* Add other social media icons */}
            </ul>
          </div>

          {/* about */}
          <div className="w-full md:w-[30%] flex flex-col justify-center items-center p-5">
            <h1 className="font-bold text-xl">ABOUT</h1>
            <p className=" font-semibold opacity-100 mt-5 text-white">
            Welcome to our bespoke MERN-powered blog platform, meticulously crafted to offer a captivating literary journey. Immerse yourself in a universe of genres and captivating narratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
