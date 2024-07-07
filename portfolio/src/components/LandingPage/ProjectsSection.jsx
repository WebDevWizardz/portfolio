import React, { useState } from "react"
import Project from "./Projects/Project"

import ProjectsProgressBar from "./ProjectsProgressBar"
import useSanity from "../../customHooks/useSanity"

function ProjectsSection() {
  const [currentSection, setCurrentSection] = useState(0)
  const { projects } = useSanity()

  return (
    <div className="relative md:my-[175px] scrollbarBug">
      <ProjectsProgressBar
        sections={projects}
        currentSection={currentSection}
      />
      <div id="work" className="flex flex-col gap-y-[70px] md:gap-y-[30vh]">
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
  )
}

export default ProjectsSection
