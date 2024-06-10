import React from "react";
import { Element } from "react-scroll";

function ContactSection() {
  const mailContent =
    "&body=Hello Karolina, %0D%0A %0D%0A I'm reaching out because I'm  interested in collaborating with you on a design project. When are you available for a brief call or meeting to explore this opportunity in more detail %0D%0A %0D%0A Kindest,...";

  return (
    <Element name="contact">
      <div className="bg-[#2C2D30] md:px-[60px] pb-[60px]">
        <div className="flex justify-center h-screen bg-[#2C2D30] flex-col md:px-[10%]">
          <p className="text-[#ECECEE] text-[12px] uppercase">don't be shy</p>
          <p className="text-[#ECECEE] text-[95px] mb-[20px]">
            Say hello
            <a
              href={`mailto:hesskarolina@gmail.com ?subject=Collaboration ${mailContent}`}
              className="text-[16px] ml-[20px] mail-emoji-hover"
            >
              (email)
            </a>
          </p>
          <p className="text-[#85878A] text-[25px] font-bold uppercase">or</p>
          <p className="text-[#ECECEE] text-[95px] ml-[120px] md:leading-[2rem]">
            spy on me here
            <span className="inline-block ml-[20px]">
              <a
                href="https://www.linkedin.com/in/karolina-hess-793399257/"
                className="text-[16px] block girl-emoji-hover"
              >
                (LinkedIn)
              </a>
              <a
                href="https://www.instagram.com/karo.dsgn"
                className="text-[16px] block eyes-emoji-hover"
              >
                (Instagram)
              </a>
            </span>
          </p>
        </div>
        <div className="flex justify-between text-[12px] pt-[12px] border-t-[.5px] border-[#67696D]">
          <p className="items-end text-[#DFE0E2]">Coded with love by WDW</p>
          <p className="items-end text-[#DFE0E2]">© 2024 Karolina Hess</p>
        </div>
      </div>
    </Element>
  );
}

export default ContactSection;
