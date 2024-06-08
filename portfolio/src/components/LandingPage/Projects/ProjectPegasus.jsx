import React from "react"
import { NavLink } from "react-router-dom"

function ProjectSection() {
  const project1 = {
    name: "Pegasus Solar",
    cover: `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusHero.png`,
    images: [
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/Mockup.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/4.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/03.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/5.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/04.png`,
      `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusProjectPage/6.png`,
    ],
    description: {
      type: ["Landing Page", "Redesign"],
      stage: "Development in progress",
      deliverables: [
        "Vision & Strategy",
        "UX Research",
        "Rebranding",
        "Testing",
      ],
    },
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5 md:flex-row p-4">
        <div className="w-[539px] h-[336px]">
          {/* Narazie wywołuje komponent Project przy uzyciu NavLink aby moc go stylowac -> docelowo moze sie to zmienic */}
          <NavLink to="/project1" state={project1}>
            <img
              className="object-cover w-full h-full"
              src={`${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusHero.png`}
              alt="Description"
            />
          </NavLink>
        </div>
        <div className="flex flex-col justify-between md:w-[320px]">
          <div>
            <ul className="list-none flex gap-x-3 text-[12px] text-[#494B50] uppercase">
              <li>UI/UX design</li>|<li>consulting</li>|<li>testing</li>
            </ul>
            <p className="text-[34px] text-[#2C2D30]">Pegasus Solar</p>
          </div>
          <p className="text-[14px] mt-4 text-[#494B50]">
            Redesign of the Pegasus landing page and the panel-building tool,
            usability testing
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
