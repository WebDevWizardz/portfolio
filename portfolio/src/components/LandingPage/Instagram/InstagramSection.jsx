import React from "react"
import InstagramPics from "./InstagramPics"

function InstagramSection() {
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
    <div className="flex flex-col items-center">
      <p className="text-[12px] text-[#85878A] mb-[20px]">instagram</p>
      <p className="text-[45px] text-[#2C2D30] mb-[55px]">@KARO.DSGN</p>
      <div className="w-full flex justify-center h-[420px]">
        <InstagramPics images={images} />
      </div>
    </div>
  )
}

export default InstagramSection
