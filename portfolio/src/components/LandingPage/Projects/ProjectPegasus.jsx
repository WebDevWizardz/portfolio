import React, { useState } from "react";
import Project from "../../ProjectPage/Project";

function ProjectSection() {
  const project1 = {
    name: "Pegasus Solar",
    cover: `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusHero.png`,
    images: [
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/Mockup.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/4.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/03.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/5.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/04.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/6.png`,
    ],
    description: {
      type: ["Landing Page", "Redesign"],
      stage: "Development in progress",
      deliverables: [
        "Vision & Strategy",
        "UX Research",
        "Rebranding",
        "Testing",
      ],
    },
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Project
        show={showModal}
        onClose={handleCloseModal}
        name={project1.name}
        images={project1.images}
        description={project1.description}
      />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-5 md:flex-row p-4">
          <div className="w-[539px] h-[336px] overflow-hidden relative project-image-container cursor-pointer">
            <img
              onClick={handleOpenModal}
              className="object-cover w-full h-full"
              src={`${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusHero.png`}
              alt="Description"
            />
            <p className="project-image-container-text text-[16px]">
              See case study
            </p>
          </div>
          <div className="flex flex-col justify-between md:w-[320px]">
            <div>
              <ul className="list-none flex gap-x-3 text-[12px] text-[#494B50] uppercase">
                <li>UI/UX design</li>|<li>consulting</li>|<li>testing</li>
              </ul>
              <p className="text-[34px] text-[#2C2D30]">Pegasus Solar</p>
            </div>
            <p className="text-[14px] mt-4 text-[#494B50]">
              Redesign of the Pegasus landing page and the panel-building tool,
              usability testing
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
