import React from "react";
import Logo from "./Logo";

function Hero() {
  return (
    <div className="heroSection relative h-screen w-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
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
