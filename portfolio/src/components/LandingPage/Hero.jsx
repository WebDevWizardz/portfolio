import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import React from "react"
import Logo from "./Logo"

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  useEffect(() => {
    gsap.to(".logo_animate", {
      scrollTrigger: {
        scrub: 0.5,
        trigger: ".start",
        start: "bottom bottom",
        endTrigger: ".start",
        end: "bottom top",
      },
      y: "0vh",
      width: "139px",
      yPercent: 0,
      justifyContent: "start",
    })
  }, [])

  return (
    <div className="z-10 heroSection relative h-[100vh] md:h-screen w-screen overflow-hidden bg-none start">
      <video
        className="absolute w-screen h-full object-fit md:object-cover scale-150 sm:scale-1"
        autoPlay
        loop
        muted
      >
        <source
          src={`${process.env.PUBLIC_URL}/assets/images/LandingPage/showreel.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-end justify-center h-full p-5 mix-blend-difference">
        <div className="w-full absolute">
          <div className="logo-container">
            <div className="logo_animate">
              <Logo fill="#ECECEE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
