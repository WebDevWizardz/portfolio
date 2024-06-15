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
        `*[_type == "project"]{
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
        console.log(data) // Log data once when it is fetched
      })
      .catch(console.error)
  }, [])

  return (
    <Element name="work">
      <div className="relative my-[60px] md:my-[175px] py-[40px]">
        <ProjectsProgressBar
          sections={projects}
          currentSection={currentSection}
        />
        <div className="flex flex-col gap-y-[120px] md:gap-y-[30vh]">
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
