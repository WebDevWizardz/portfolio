import React, { useEffect } from "react"
import Swiper from "swiper/bundle"
import "swiper/css"
import "swiper/css/navigation" // Import Swiper navigation styles
import "swiper/css/pagination" // Import Swiper pagination styles

function InstagramPics({ images }) {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    })
  }, [])

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`swiper-slide w-[315px] ${
              index % 2 === 0 ? "h-[315px]" : "h-[420px]"
            }`}
          >
            <img
              className="object-cover"
              src={`${process.env.PUBLIC_URL}${image.src}`}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InstagramPics
