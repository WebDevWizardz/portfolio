import React, { useEffect } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import InstagramSection from "./Instagram/InstagramSection"
gsap.registerPlugin(ScrollTrigger)

function ContactSection() {
  useEffect(() => {
    gsap.fromTo(
      `.bg_color_animation_trigger`,
      { backgroundColor: "#FCFCFC", opacity: 1 },
      {
        backgroundColor: "#2C2D30",
        opacity: 1,
        scrollTrigger: {
          trigger: `#contact`,
          start: "top center+=100",
          end: "bottom center",
          scrub: true,
        },
        ease: "power3.out",
      }
    )
    gsap.fromTo(
      `#contact`,
      { color: "#2C2D30" },
      {
        color: "#FCFCFC",

        scrollTrigger: {
          trigger: `#contact`,
          start: "top center-=250",
          end: "bottom center",
          scrub: true,
        },
        ease: "power3.out",
        delay: 1,
      }
    )
  }, [])

  // text-[#85878A]

  const mailContent =
    "&body=Hello Karolina, %0D%0A %0D%0A I'm reaching out because I'm  interested in collaborating with you on a design project. When are you available for a brief call or meeting to explore this opportunity in more detail %0D%0A %0D%0A Kindest,..."

  return (
    <div className="bg_color_animation_trigger mt-[50px] md:mt-0">
      <InstagramSection />
      <div
        id="contact"
        className="md:px-[60px] pb-[60px] md:pt-[100px] pt-[60px]"
      >
        <div className="flex justify-center h-fit py-[50vh] sm:py-0 sm:h-screen flex-col md:px-[10%] pl-[20px]">
          <p className=" text-[14px] uppercase">don't be shy</p>
          <p className=" md:text-[95px] text-[34px] mb-[20px]">
            Say hello
            <a
              href={`mailto:hesskarolina@gmail.com ?subject=Collaboration ${mailContent}`}
              className="md:text-[18px] text-[14px] ml-[20px] mail-emoji-hover"
            >
              (Email)
            </a>
          </p>
          <p className=" md:text-[25px] text-[14px] font-bold uppercase">or</p>
          <p className=" md:text-[95px] text-[34px] md:ml-[120px] md:leading-[3rem]">
            <span className="mr-[20px]">spy on me here</span>
            <span className="inline-block">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/karolina-hess-793399257/"
                className="md:text-[16px] text-[14px] block girl-emoji-hover"
              >
                (LinkedIn)
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/karo.dsgn"
                className="md:text-[16px] text-[14px] block eyes-emoji-hover"
              >
                (Instagram)
              </a>
            </span>
          </p>
        </div>
        <div className=" flex justify-between text-[12px] pt-[12px] border-t-[.5px] border-[#67696D] mx-[10px] sm:mx-[20px]">
          <p className="items-end text-[#DFE0E2]">
            Coded with love by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wdw-studio.com/"
              className="underline cursor-pointer"
            >
              WDW
            </a>
          </p>
          <p className="items-end text-[#DFE0E2]">
            © {new Date().getFullYear()} Karolina Hess
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
