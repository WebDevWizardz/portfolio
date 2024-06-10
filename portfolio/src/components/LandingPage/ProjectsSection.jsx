import React from "react";
import Project from "./Projects/Project";
import { Element } from "react-scroll";
import { projectsData } from "./Projects/project-data";

function ProjectsSection() {
  return (
    <div>
      <Element name="work">
        {projectsData.map((project) => (
          <Project projectData={project} />
        ))}
      </Element>
    </div>
  );
}

export default ProjectsSection;
