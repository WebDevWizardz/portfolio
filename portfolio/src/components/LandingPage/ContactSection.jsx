import React from "react";
import { Element } from "react-scroll";

function ContactSection() {
  return (
    <Element name="contact">
      <div className="bg-[#2C2D30] md:px-[60px] pb-[60px]">
        <div className="flex justify-center h-screen bg-[#2C2D30] flex-col md:px-[10%]">
          <p className="text-[#ECECEE] text-[12px] uppercase mb-[20px]">
            don't be shy
          </p>
          <p className="text-[#ECECEE] text-[95px] mb-[20px]">
            Say hello <span className="text-[16px]">(email)</span>
          </p>
          <p className="text-[#85878A] text-[25px] font-bold uppercase">or</p>
          <p className="text-[#ECECEE] text-[95px] ml-[120px]">
            spy on me here <span className="text-[16px]">(LinkedIn)</span>
            <span className="text-[16px]">(Instagram)</span>
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
