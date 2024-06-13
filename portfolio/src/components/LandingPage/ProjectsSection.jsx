import React, { useState } from "react";
import Project from "./Projects/Project";
import { Element } from "react-scroll";
import data from "./Projects/projectsMockData.json";
import ProjectsProgressBar from "./ProjectsProgressBar";

function ProjectsSection() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <Element name="work">
      <div className="relative my-[60px] md:my-[175px] py-[40px]">
        <ProjectsProgressBar sections={data} currentSection={currentSection} />
        <div className="flex flex-col gap-y-[120px] md:gap-y-[30vh]">
          {data.map((project, index) => (
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
  );
}

export default ProjectsSection;
