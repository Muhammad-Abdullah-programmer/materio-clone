import React from "react";

import { FaGithub, CiInstagram, FaFacebook, FaLinkedin } from "../assets/Icons";
const Footer = () => {
  return (
    <div className="flex justify-between items-center w-[90%] mx-auto  my-4 py-2">
      {/* Left  */}
      <div className="">
        <p>
          © 2026, Made with ❤️ by{" "}
          <span className="text-[#8C57FF]">M.Abdullah</span>
        </p>
      </div>

      {/* Right  */}

      <div className="flex gap-3 text-2xl">
      <a href="https://www.linkedin.com/in/mabdullahdeveloper/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Muhammad-Abdullah-programmer?tab=repositories">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/M.Abdullahdeveloper">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/m.abdullahdeveloper/">
        <CiInstagram />
      </a>
      </div>
    </div>
  );
};

export default Footer;
