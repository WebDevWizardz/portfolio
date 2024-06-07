import React from "react";

function InstagramPics({ images }) {
  return (
    <div className="flex gap-x-5">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-[315px] ${
            index % 2 === 0 ? "h-[315px]" : "h-[420px]"
          } mb-5`}
        >
          <img
            className="object-cover w-full h-full"
            src={`${process.env.PUBLIC_URL}${image.src}`}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}

export default InstagramPics;
