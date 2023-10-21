import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
   
        <div className="w-full h-full flex flex-col gap-8 text-center">
          <h3 className="text-xl uppercase text-designColor tracking-wider">
            Quick Link
          </h3>
          <div className="flex gap-6 justify-center">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      
  );
}

export default Footer;
