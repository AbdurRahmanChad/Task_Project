import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-yellow-200 pt-16">
        <div className=" flex flex-col lg:flex-row justify-between items-center lg:px-14 px-5 ">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <BsInstagram
              size={35}
              className="hover:text-yellow-300 transition-all cursor-pointer"
            />
            <FaFacebook
              size={35}
              className="hover:text-yellow-300 transition-all cursor-pointer"
            />
            <FaLinkedin
              size={35}
              className="hover:text-yellow-300 transition-all cursor-pointer"
            />
            <BsInstagram
              size={35}
              className="hover:text-yellow-300 transition-all cursor-pointer"
            />
          </div>
          <h1 className="text-3xl font-semibold text-black">Abdur Rahman</h1>
        </div>
        <p className="text-center">CopyRight-2024</p>
      </div>
    </>
  );
};

export default Footer;
