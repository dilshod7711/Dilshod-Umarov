import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="w-full py-6  border-t border-purple-500/20 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Chap tomon: Muallif */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-white text-lg">
            Designed and Developed by{" "}
            <span className="text-[#cd5ff8] font-semibold">
              Dilshod Umbarov
            </span>
          </h3>
        </div>

        {/* Markaz: Copyright */}
        <div className="flex-1 text-center">
          <h3 className="text-white text-lg">
            Copyright © {year} <span className="hidden sm:inline">KT</span>
          </h3>
        </div>

        {/* O'ng tomon: Ijtimoiy tarmoqlar */}
        <div className="flex-1 flex justify-center md:justify-end gap-2">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#cd5ff8] text-xl transition-all duration-300"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#cd5ff8] text-xl transition-all duration-300"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#cd5ff8] text-xl transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#cd5ff8] text-xl transition-all duration-300"
          >
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
