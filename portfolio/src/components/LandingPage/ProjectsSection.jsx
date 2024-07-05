import React, { useState, useEffect } from "react"
import Project from "./Projects/Project"
import { Element } from "react-scroll"
import ProjectsProgressBar from "./ProjectsProgressBar"
import sanityClient from "../../sanityClient"

function ProjectsSection() {
  const [currentSection, setCurrentSection] = useState(0)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] | order(_updatedAt desc) {
        name,
        "slug": slug.current,
        description,
        shortBio,
        tags,
        isComingSoon,
        images[]{asset->{url}}
      }`
      )
      .then((data) => {
        setProjects(data)
      })
      .catch(console.error)
  }, [])

  return (
    <Element name="work">
      <div className="relative md:my-[175px] py-[100px] scrollbarBug">
        <ProjectsProgressBar
          sections={projects}
          currentSection={currentSection}
        />
        <div className="flex flex-col gap-y-[70px] md:gap-y-[30vh]">
          {projects.map((project, index) => (
            <Project
              key={index}
              projectData={project}
              id={index}
              setCurrentSection={setCurrentSection}
            />
          ))}
        </div>
      </div>
    </Element>
  )
}

export default ProjectsSection
