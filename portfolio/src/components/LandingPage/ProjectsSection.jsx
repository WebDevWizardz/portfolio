import React from "react"
import Project from "./Projects/Project"
import { Element } from "react-scroll"
import { projectsData } from "./Projects/project-data"
import data from "./Projects/projectsMockData.json"

function ProjectsSection() {
  return (
    <div>
      <Element name="work">
        {data.map((project, index) => (
          <Project key={index} projectData={project} />
        ))}
      </Element>
    </div>
  )
}

export default ProjectsSection
