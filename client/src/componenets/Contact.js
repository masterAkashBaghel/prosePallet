import React from "react";

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row sm:flex-row h-auto w-full items-center justify-end mt-5   mx-auto   md:w-[75%] sm:w-[90%]">
      {/* imaghe */}

      {/* contact details */}
      <div
        className="     p-10 flex flex-col gap-4 m-5   ads custom-scale
"
      >
        <h1 className="font-semibold text-3xl md:text-4xl mb-4 text-center">
          CONTACT US
        </h1>
        <div className=" w-full h-[2px] bg-fuchsia-600"></div>
        <p className="font-semibold  atext-xl md:text-2xl mb-4 text-center text-[#9b5d26]">
          Let's collaborate and <span className=" text-[#82E0AA]"> grow</span>,
          So we can co-create a better{" "}
          <span className=" text-[#82E0AA]">tomorrow</span>{" "}
        </p>
        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://www.linkedin.com/in/master-akash-kumar-singh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>

          <p className="font-bold">
            LinkedIn
            <p className="opacity-50 ">Akash Kumar Singh</p>
          </p>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://github.com/masterAkashBaghel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-8 w-8"></FaGithub>
            </a>
          </div>
          <p className="font-bold">
            Github
            <p className=" opacity-50 ">masterAkashBaghel</p>
          </p>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <a
              href="https://twitter.com/masterAkashBaghel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="h-8 w-8"></FaTwitter>
            </a>
          </div>
          <p className=" font-bold">
            Twitter
            <p className=" opacity-50">@masterAkashsing</p>
          </p>
        </div>

        <div className=" flex flex-row gap-5">
          <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center mx-0 my-0 hover:bg-white">
            <FaWhatsapp className="h-8 w-8"></FaWhatsapp>
          </div>
          <p className=" font-bold">
            Whatsapp
            <p className=" opacity-50">+91 9876543321</p>
          </p>
        </div>

        <div className=" w-full h-[2px] bg-fuchsia-600"></div>
      </div>
    </div>
  );
};

export default Contact;
