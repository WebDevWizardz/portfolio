import React, { useState, useEffect, useRef } from "react"
import CaseStudy from "./CaseStudy"

function Project({ projectData, id, setCurrentSection }) {
  const [showModal, setShowModal] = useState(false)
  const ref = useRef()

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSection(id)
        }
      },
      { rootMargin: "-200px 0px", threshold: 0.4 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current)
      }
    }
  }, [id, setCurrentSection])

  return (
    <>
      <CaseStudy
        show={showModal}
        onClose={handleCloseModal}
        name={projectData.name}
        images={projectData.images}
        description={projectData.description}
      />
      <div
        className="flex items-center justify-center h-full px-[36px] md:px-0"
        ref={ref}
      >
        <div
          className={
            `flex flex-col gap-5` +
            (id % 2 !== 0
              ? " md:flex-row-reverse md:text-right"
              : " md:flex-row")
          }
        >
          <div className="block md:hidden">
            <ul
              className={
                `list-none flex gap-x-[10px] text-[12px] text-[#494B50] uppercase` +
                (id % 2 !== 0 ? " md:justify-end" : " md:justify-start")
              }
            >
              {projectData.tags.map((tag, index) => (
                <li key={index}>
                  <span
                    className={
                      index !== projectData.tags.length - 1
                        ? "pr-[10px] border-r-[1px] border-[#67696D]"
                        : "pl-0 pr-0"
                    }
                  >
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[25px] md:text-[34px] text-[#2C2D30]">
              {projectData.name}
            </p>
            {projectData.isComingSoon && (
              <p className="text-[16px] text-[#67696D]">(coming soon)</p>
            )}
          </div>
          <div
            onClick={!projectData.isComingSoon ? handleOpenModal : null}
            className={
              `w-full md:w-[539px] sm:h-[198px] md:h-[336px] overflow-hidden relative` +
              (!projectData.isComingSoon
                ? " project-image-container cursor-pointer"
                : " cursor-not-allowed")
            }
          >
            <img
              className="object-cover w-full h-full"
              src={projectData.images[0].asset.url}
              alt="Description"
            />
            <p className="project-image-container-text text-[16px]">
              See case study
            </p>
          </div>
          <div className="flex flex-col justify-between md:w-[320px]">
            <div className="hidden md:block">
              <ul
                className={
                  `list-none flex gap-x-[10px] text-[12px] text-[#494B50] uppercase` +
                  (id % 2 !== 0 ? " md:justify-end" : " md:justify-start")
                }
              >
                {projectData.tags.map((tag, index) => (
                  <li key={index}>
                    <span
                      className={
                        index !== projectData.tags.length - 1
                          ? "pr-[10px] border-r-[1px] border-[#67696D]"
                          : "pl-0 pr-0"
                      }
                    >
                      {tag}
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
  )
}

export default Project
