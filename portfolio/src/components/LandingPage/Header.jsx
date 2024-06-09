import React from "react";
import Logo from "../Icons/Logo";
import { Link } from "react-scroll";

function Header() {
  return (
    <nav className="fixed z-50 w-full  py-[20px] px-[20px] md:px-[60px] md:py-[40px] flex justify-between">
      <a href="#" className="w-[139px] h-[15,44px]">
        <Logo fill="#494B50" />
      </a>
      <div className="flex gap-6 text-[12px] text-[#2C2D30] cursor-pointer">
        <Link
          className="text-bottom-line"
          to="work"
          smooth={true}
          duration={1500}
        >
          Work
        </Link>
        <a
          href="https://www.instagram.com/karo.dsgn"
          className="text-bottom-line"
        >
          Playground
        </a>
        <a href="https://read.cv/karolinahess" className="text-bottom-line">
          Resume
        </a>
        <Link
          to="contact"
          smooth={true}
          duration={1500}
          className="text-bottom-line"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
