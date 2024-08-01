// import React, { useRef, useEffect } from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Pagination } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/pagination"

// function InstagramPics({ images }) {
//   const swiperRef = useRef(null)

//   const handleSwiperMove = () => {
//     const swiper = swiperRef.current.swiper
//     const translateValue = swiper.translate * 0.1 // Adjust this value to change the speed difference
//     const parallaxEls = document.querySelectorAll(".parallax-bg")
//     parallaxEls.forEach((el) => {
//       el.style.transform = `translateX(${translateValue}px)`
//     })
//   }

//   useEffect(() => {
//     if (swiperRef.current) {
//       const swiper = swiperRef.current.swiper
//       swiper.on("sliderMove", handleSwiperMove)
//       swiper.on("slideChangeTransitionStart", handleSwiperMove)
//       swiper.on("slideChangeTransitionEnd", handleSwiperMove)
//     }
//   }, [])

//   return (
//     <Swiper
//       modules={[Pagination]}
//       ref={swiperRef}
//       loop={true}
//       slidesPerView={1.2}
//       spaceBetween={10}
//       pagination={{ dynamicBullets: true }}
//       speed={500}
//       breakpoints={{
//         640: {
//           slidesPerView: 1.2,
//           spaceBetween: 10,
//           pagination: true,
//         },
//         768: {
//           slidesPerView: 4.2,
//           spaceBetween: 20,
//           pagination: false,
//         },
//       }}
//       className="mySwiper"
//     >
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           <div
//             className={`slide-bg parallax-bg ${
//               index % 2 === 0 ? "!h-[75%]" : "!h-[100%]"
//             }`}
//             style={{ backgroundImage: `url(${image.src})` }}
//           ></div>
//           <div className="slide-content"></div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   )
// }

// export default InstagramPics
