import React from "react";
import ProjectPegasus from "./Projects/ProjectPegasus";
import ProjectNetPartners from "./Projects/ProjectNetPartners";
import ProjectBodyVibes from "./Projects/ProjectBodyVibes";
import { Element } from "react-scroll";

function ProjectsSection() {
  return (
    <div>
      <Element name="work">
        <ProjectPegasus />
        <ProjectNetPartners />
        <ProjectBodyVibes />
      </Element>
    </div>
  );
}

export default ProjectsSection;
