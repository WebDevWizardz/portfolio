import React from "react";

const ProjectsProgressBar = ({ sections, currentSection }) => {
  return (
    <div className="absolute top-[40px] left-[60px] h-full hidden md:block">
      <div className="sticky top-[20vh] w-fit h-fit flex flex-col gap-y-[10px] mt-[80px] mb-[120px]">
        {sections.map((section, index) => (
          <div
            key={index}
            className={
              ` h-[60px] w-[2px] transition-colors duration-500` +
              (currentSection !== index ? " bg-[#C1C2C5]" : " bg-[#494B50]")
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsProgressBar;
