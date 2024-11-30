import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef, useEffect, useState } from "react"
import Logo from "./Logo"
import useCheckDeviceType from "../../customHooks/useCheckDeviceType"
import useSanity from "../../customHooks/useSanity"

gsap.registerPlugin(ScrollTrigger)

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0
}

function Hero() {
  const isMobile = useCheckDeviceType()
  const videoParentRef = useRef(null)
  const [shouldUseImage, setShouldUseImage] = useState(false)
  const { reelData } = useSanity()
  console.warn(reelData)
  const reels = {}
  reelData.forEach((reel) => {
    reels[reel.name] = reel.fileUrl
  })

  const mobileUrl = reels.Mobile
  const desktopUrl = reels.Desktop
  const videoUrl = isMobile ? mobileUrl : desktopUrl

  useEffect(() => {
    setTimeout(() => {
      if (isSafari() && videoParentRef.current) {
        const player = videoParentRef.current.children[0]
        if (player) {
          player.controls = false
          player.playsinline = true
          player.muted = true
          player.setAttribute("muted", "")
          player.autoplay = true

          setTimeout(() => {
            const promise = player.play()
            if (promise && promise.then) {
              promise
                .then(() => {
                  console.warn("Video is playing successfully.")
                })
                .catch(() => {
                  videoParentRef.current.style.display = "none"
                  setShouldUseImage(true)
                })
            }
          }, 0)
        }
      }
    }, 100)

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
      {shouldUseImage ? (
        <img
          src={videoUrl}
          alt="Fallback"
          className="absolute w-screen h-full object-cover"
        />
      ) : (
        <div
          ref={videoParentRef}
          className="absolute w-screen h-full object-cover"
          dangerouslySetInnerHTML={{
            __html: `
            <video
              loop
              muted
              autoplay
              playsinline
              preload="metadata"
              class="absolute w-screen h-full object-cover"
            >
            <source src="${videoUrl}" type="video/mp4" />
            </video>`,
          }}
        />
      )}

      <div className="relative z-10 flex items-end justify-center h-full p-5 mix-blend-difference bg-black">
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
