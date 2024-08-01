import React from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

function NavLinks({ isMobile, onLinkClick }) {
  return (
    <>
      <p
        className="text-bottom-line"
        onClick={() => {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: "#work", offsetY: 200 },
          })
          onLinkClick()
        }}
      >
        {isMobile && <span className="mr-[35px] text-[10px]">01</span>}
        Work
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/karo.dsgn"
        className="text-bottom-line"
      >
        {isMobile && <span className="mr-[35px] text-[10px]">02</span>}
        Playground
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://read.cv/karolinahess"
        className="text-bottom-line"
      >
        {isMobile && <span className="mr-[35px] text-[10px]">03</span>}
        Resume
      </a>
      <p
        className="text-bottom-line"
        onClick={() => {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: "#contact", offsetY: -100 },
          })
          onLinkClick()
        }}
      >
        {isMobile && <span className="mr-[35px] text-[10px]">04</span>}
        Contact
      </p>
    </>
  )
}

export default NavLinks
