import React from "react"

function ProjectImage({ images, isComingSoon, handleOpenModal }) {
  return (
    <div
      onClick={!isComingSoon ? handleOpenModal : null}
      className={
        `w-full md:w-[539px] sm:h-[198px] md:h-[336px] overflow-hidden relative` +
        (!isComingSoon
          ? " project-image-container cursor-pointer"
          : " cursor-not-allowed")
      }
    >
      <img
        className="object-cover w-full h-full"
        src={images[0].asset.url}
        alt="Description"
      />
      <p className="project-image-container-text text-[16px]">See case study</p>
    </div>
  )
}

export default ProjectImage
