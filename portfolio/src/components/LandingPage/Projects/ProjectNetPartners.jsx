import React from "react"
import { NavLink } from "react-router-dom"

function ProjectSection() {
  const project2 = {
    name: "NetPartners",
    imageLink: `${process.env.PUBLIC_URL}/assets/images/NetPartners/NetPartnersHero.png`,
    description: {
      type: ["Product"],
      stage: "Start up",
      deliverables: ["Vision & Strategy", "Branding", "Product Design"],
    },
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5 md:flex-row p-4">
        <div className="flex flex-col justify-between md:w-[320px]">
          <div>
            <ul className="list-none flex gap-x-3 text-[12px] text-[#494B50] uppercase">
              <li>branding</li>|<li>visual identity</li>
            </ul>
            <p className="text-[34px] text-[#2C2D30]">Net Partners</p>
          </div>
          <p className="text-[14px] mt-4 text-[#494B50]">
            Strategy, logo system, type and color system, art direction, brand
            book for a conceptual brand
          </p>
        </div>
        <div className="w-[539px] h-[336px]">
          {/* Narazie wywołuje komponent Project przy uzyciu NavLink aby moc go stylowac -> docelowo moze sie to zmienic */}
          <NavLink to="/project2" state={project2}>
            <img
              className="object-cover w-full h-full"
              src={`${process.env.PUBLIC_URL}/assets/images/NetPartners/NetPartnersHero.png`}
              alt="Description"
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
