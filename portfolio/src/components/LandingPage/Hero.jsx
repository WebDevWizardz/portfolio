import { gsap } from "gsap"
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

  console.log(reelData[1])

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
  if (!reelData || reelData.length < 2) {
    return <div>Loading...</div> // or handle this case appropriately
  }

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
        <source
          src={isMobile ? reelData[0].fileUrl : reelData[1].fileUrl}
          type="video/mp4"
        />
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
