import React, { useEffect, useState } from "react"
import NavLinks from "./NavLinks"
import { gsap } from "gsap"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true)
      document.body.style.overflowY = "auto"
      setTimeout(() => {
        setIsOpen(false)
        setIsClosing(false)
      }, 500) // match the duration of your CSS animation
    } else {
      setIsOpen(true)
      document.body.style.overflowY = "hidden"
    }
  }

  // Slide in from top on page load
  useEffect(() => {
    const animation = gsap.to(".nav", {
      y: "0",
      duration: 1.5,
      ease: "power2.inOut",
      delay: 2.6,
    })

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <div className="scrollbarBug">
      <nav
        className={`fixed z-50 w-full md:w-1/2 right-0 py-[20px] px-[20px] md:px-[60px] md:py-[40px] -translate-y-full flex justify-end text-[#fcfcfc] nav ${
          isOpen ? "" : " mix-blend-difference"
        }`}
      >
        <div className="hidden sm:flex gap-6 text-[12px] cursor-pointer">
          <NavLinks isMobile={false} />
        </div>
        <div
          onClick={toggleMenu}
          className="z-50 block sm:hidden text-[14px] py-[10px] pl-[18px]"
        >
          {!isOpen ? "Navi" : "Close"}
        </div>

        {isOpen && (
          <div
            className={`absolute top-0 left-0 px-[20px] flex flex-col justify-center sm:hidden gap-6 text-[45px] cursor-pointer bg-[#231D1C] w-full h-screen case_study ${
              isClosing ? "closing" : ""
            }`}
          >
            <NavLinks isMobile={true} onLinkClick={toggleMenu} />
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
