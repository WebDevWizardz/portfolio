import React, { useState } from "react";
import CaseStudy from "./CaseStudy";

function Project({ projectData }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CaseStudy
        show={showModal}
        onClose={handleCloseModal}
        name={projectData.name}
        images={projectData.images}
        description={projectData.description}
      />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-5 md:flex-row p-4">
          <div
            onClick={!projectData.isComingSoon ? handleOpenModal : null}
            className={
              `w-[539px] h-[336px] overflow-hidden relative` +
              (!projectData.isComingSoon
                ? " project-image-container cursor-pointer"
                : "")
            }
          >
            <img
              className="object-cover w-full h-full"
              src={projectData.images[0]}
              alt="Description"
            />
            <p className="project-image-container-text text-[16px]">
              See case study
            </p>
          </div>
          <div className="flex flex-col justify-between md:w-[320px]">
            <div>
              <ul className="list-none flex gap-x-3 text-[12px] text-[#494B50] uppercase">
                {projectData.tags.map((tag, index) => (
                  <li>
                    <span key={index}>{tag}</span>
                    <span className="ml-3">
                      {index !== projectData.tags.length - 1 && "|"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[34px] text-[#2C2D30]">{projectData.name}</p>
              {projectData.isComingSoon && (
                <p className="text-[16px] text-[#67696D]">(coming soon)</p>
              )}
            </div>
            <p className="text-[14px] mt-4 text-[#494B50]">
              {projectData.shortBio}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
