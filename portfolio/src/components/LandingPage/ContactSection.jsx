import React from "react"

function ContactSection() {
  const mailContent =
    "&body=Hello Karolina, %0D%0A %0D%0A I'm reaching out because I'm  interested in collaborating with you on a design project. When are you available for a brief call or meeting to explore this opportunity in more detail %0D%0A %0D%0A Kindest,..."

  return (
    <div
      id="contact"
      className="bg-[#2C2D30] md:px-[60px] pb-[60px] md:mt-[140px] mt-[60px]"
    >
      <div className="flex justify-center h-fit py-[20vh] sm:py-0 sm:h-screen bg-[#2C2D30] flex-col md:px-[10%] pl-[20px]">
        <p className="text-[#ECECEE] text-[14px] uppercase">don't be shy</p>
        <p className="text-[#ECECEE] md:text-[95px] text-[34px] mb-[20px]">
          Say hello
          <a
            href={`mailto:hesskarolina@gmail.com ?subject=Collaboration ${mailContent}`}
            className="md:text-[18px] text-[14px] ml-[20px] mail-emoji-hover"
          >
            (Email)
          </a>
        </p>
        <p className="text-[#85878A] md:text-[25px] text-[14px] font-bold uppercase">
          or
        </p>
        <p className="text-[#ECECEE] md:text-[95px] text-[34px] md:ml-[120px] md:leading-[3rem]">
          <span className="mr-[20px]">spy on me here</span>
          <span className="inline-block">
            <a
              href="https://www.linkedin.com/in/karolina-hess-793399257/"
              className="md:text-[16px] text-[14px] block girl-emoji-hover"
            >
              (LinkedIn)
            </a>
            <a
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
          <a href="/portfolio" className="underline cursor-pointer">
            WDW
          </a>
        </p>
        <p className="items-end text-[#DFE0E2]">
          © {new Date().getFullYear()} Karolina Hess
        </p>
      </div>
    </div>
  )
}

export default ContactSection
