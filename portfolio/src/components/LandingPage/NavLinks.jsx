import React from "react";
import { Link } from "react-scroll";

function NavLinks({ isMobile, onLinkClick }) {
  return (
    <>
      <Link
        className="text-bottom-line"
        to="work"
        smooth={true}
        duration={1500}
        onClick={onLinkClick}
      >
        {isMobile && <span className="mr-[35px] text-[10px]">01</span>}
        Work
      </Link>
      <a
        href="https://www.instagram.com/karo.dsgn"
        className="text-bottom-line"
      >
        {isMobile && <span className="mr-[35px] text-[10px]">02</span>}
        Playground
      </a>
      <a href="https://read.cv/karolinahess" className="text-bottom-line">
        {isMobile && <span className="mr-[35px] text-[10px]">03</span>}
        Resume
      </a>
      <Link
        to="contact"
        smooth={true}
        duration={1500}
        className="text-bottom-line"
        onClick={onLinkClick}
      >
        {isMobile && <span className="mr-[35px] text-[10px]">04</span>}
        Contact
      </Link>
    </>
  );
}

export default NavLinks;
