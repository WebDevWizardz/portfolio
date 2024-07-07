import React, { useState, useEffect, useRef } from "react"
import CaseStudy from "./CaseStudy"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import ProjectDetails from "./ProjectDetails"
import ProjectImage from "./ProjectImage"

gsap.registerPlugin(ScrollTrigger)

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
        observer.unobserve(ref.current)
      }
    }
  }, [id, setCurrentSection])

  useEffect(() => {
    gsap.fromTo(
      ".tags",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".tags_trigger",
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none none",
          markers: true,
        },
        duration: 1,
        ease: "power3.out",
      }
    )
  }, [])

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
        className="flex items-center justify-center h-full px-[36px] md:px-0 tags_trigger"
        ref={ref}
      >
        {id % 2 !== 0 ? (
          <div className="flex flex-col md:flex-row-reverse gap-5 md:text-right">
            <ProjectImage
              images={projectData.images}
              isComingSoon={projectData.isComingSoon}
              handleOpenModal={handleOpenModal}
            />
            <ProjectDetails
              tags={projectData.tags}
              name={projectData.name}
              isComingSoon={projectData.isComingSoon}
              shortBio={projectData.shortBio}
              alignmentClass="hidden md:block"
              tagsAlignmentClass="justify-end"
            />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-5 md:text-left">
            <ProjectImage
              images={projectData.images}
              isComingSoon={projectData.isComingSoon}
              handleOpenModal={handleOpenModal}
            />
            <ProjectDetails
              tags={projectData.tags}
              name={projectData.name}
              isComingSoon={projectData.isComingSoon}
              shortBio={projectData.shortBio}
              alignmentClass="hidden md:block"
              tagsAlignmentClass="justify-start"
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Project
