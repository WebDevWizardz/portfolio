import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import React from "react"
import Logo from "./Logo"
import useSanity from "../../customHooks/useSanity"
import useCheckDeviceType from "../../customHooks/useCheckDeviceType"

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const { reelData } = useSanity()
  const isMobile = useCheckDeviceType()

  const mobileUrl =
    "https://cdn.sanity.io/files/lezkfw80/production/ca4967eac9ec5812abc27d3b5b8fa6595018964c.mp4"
  const desktopUrl =
    "https://cdn.sanity.io/files/lezkfw80/production/b41f4d841093db2c651dd9aa66e3b0e5a1d4d995.mp4"
  console.log(desktopUrl)

  useGSAP(() => {
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
    <div
      id="heroSection"
      className="z-10 heroSection relative h-[100vh] md:h-screen w-screen overflow-hidden bg-none start"
    >
      <video
        className="absolute w-screen h-full object-fit md:object-cover scale-150 sm:scale-1"
        autoPlay
        loop
        muted
      >
        <source src={isMobile ? mobileUrl : desktopUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-end justify-center h-full p-5 mix-blend-difference">
        <div className="w-full absolute">
          <div className="logo-container">
            <div className="logo_animate relative z-[90]">
              <Logo fill="#ECECEE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
