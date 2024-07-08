import React, { useEffect } from "react"
import InstagramPics from "./InstagramPics"
import { gsap } from "gsap"
import { ScrollTrigger, CustomEase } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CustomEase)

function InstagramSection() {
  CustomEase.create("karoEase", "0.72,0,0.32,0.99")

  useEffect(() => {
    gsap.fromTo(
      `.insta_title`,
      { y: "100%" },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: `.insta_trigger`,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        duration: 0.6,
        ease: "karoEase",
      }
    )
    gsap.fromTo(
      `.insta`,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: `.insta_trigger`,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        duration: 0.6,
        ease: "karoEase",
        delay: 0.5,
      }
    )
  }, [])

  const images = [
    {
      src: `${process.env.PUBLIC_URL}/assets/images/Instagram/instagram-1.png`,
      alt: "Instagram post 1",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/Instagram/instagram-2.png`,
      alt: "Instagram post 2",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/Instagram/instagram-3.png`,
      alt: "Instagram post 3",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/Instagram/instagram-4.png`,
      alt: "Instagram post 4",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/Instagram/instagram-1.png`,
      alt: "Instagram post 1",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/Instagram/instagram-2.png`,
      alt: "Instagram post 2",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/Instagram/instagram-3.png`,
      alt: "Instagram post 3",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/Instagram/instagram-4.png`,
      alt: "Instagram post 4",
    },
  ]

  return (
    <div className="flex flex-col items-center insta_trigger">
      <div className="h-[20px] mb-[10px] overflow-hidden">
        <p className="text-[12px] text-[#85878A] mb-[20px] uppercase insta_title">
          instagram
        </p>
      </div>
      <div className="overflow-hidden h-[60px] mb-[70px]">
        <p className="text-[45px] text-[#2C2D30] mb-[55px] insta">@KARO.DSGN</p>
      </div>
      <div className="w-full flex justify-center h-[420px] swiper_wrapper">
        <InstagramPics images={images} />
      </div>
    </div>
  )
}

export default InstagramSection
