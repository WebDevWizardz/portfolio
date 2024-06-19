import React from "react";
import Logo from "./Logo";

function Hero() {
  return (
    <div className="z-10 heroSection relative h-[100vh] md:h-screen w-screen overflow-hidden bg-[black]">
      <video
        className="absolute w-full h-full object-fit md:object-cover scale-150 sm:scale-1"
        autoPlay
        loop
        muted
      >
        <source
          src={`${process.env.PUBLIC_URL}/assets/images/LandingPage/showreel.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-end justify-center h-full p-5 mix-blend-difference">
        <div className="w-full">
          <Logo fill="#ECECEE" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
