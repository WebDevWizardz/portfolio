import React from "react"
import { NavLink } from "react-router-dom"

function LandingPage() {
  //Docelowo będą to dane z backednu / CMS przesyłane w podobnej lub identycznej strukturze.
  const project1 = {
    name: "Pegasus Solar",
    imageLink: `${process.env.PUBLIC_URL}/assets/images/Pegasus/PegasusHero.png`,
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
    <div className="font-display">
      <h1>LandingPage</h1>
      <NavLink to="/project" state={project1}>
        <li className="cursor-pointer hover:opacity-15">{project1.name}</li>
      </NavLink>
      <NavLink to="/project" state={project2}>
        <li className="cursor-pointer hover:opacity-15">{project2.name}</li>
      </NavLink>
    </div>
  )
}

export default LandingPage
