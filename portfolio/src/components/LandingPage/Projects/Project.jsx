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
      `.tags-${id}`,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: `.tags_trigger-${id}`,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        duration: 0.5,
        ease: "power3.out",
      }
    )
    gsap.fromTo(
      `.name-${id}`,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: `.tags_trigger-${id}`,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        duration: 0.7,
        ease: "power3.out",
        delay: 0.4,
      }
    )
    gsap.fromTo(
      `.coming_soon-${id}`,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: `.tags_trigger-${id}`,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        duration: 0.7,
        ease: "power3.out",
        delay: 0.7,
      }
    )
    gsap.fromTo(
      `.short_bio-${id}`,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: `.tags_trigger-${id}`,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none none",
        },
        duration: 0.5,
        ease: "power3.out",
        delay: 1,
      }
    )
  }, [id])

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
        className={`flex items-center justify-center h-full px-[36px] md:px-0 tags_trigger-${id}`}
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
              tagsAlignmentClass="justify-end"
              tagClass={`tags-${id}`}
              nameClass={`name-${id}`}
              shortBioClass={`short_bio-${id}`}
              comingSoon={`coming_soon-${id}`}
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
              tagsAlignmentClass="justify-start"
              tagClass={`tags-${id}`}
              nameClass={`name-${id}`}
              shortBioClass={`short_bio-${id}`}
              comingSoon={`coming_soon-${id}`}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Project
