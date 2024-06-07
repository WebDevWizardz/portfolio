import React from "react";
import Logo from "../Icons/Logo";

function Header() {
  return (
    <nav className="fixed z-50 w-full  py-[20px] px-[20px] md:px-[60px] md:py-[40px] flex justify-between">
      <div className="w-[139px] h-[15,44px]">
        <Logo fill="#494B50" />
      </div>
      <div className="flex gap-6 text-[12px] text-[#2C2D30]">
        <a href="">Work</a>
        <a href="">Playground</a>
        <a href="">Resume</a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
