import React from "react"
import { NavLink } from "react-router-dom"

function LandingPage() {
  return (
    <div className="font-display">
      <h1>LandingPage</h1>
      <NavLink to="/project1">
        <li className=" cursor-pointer hover:opacity-15">Project 1</li>
      </NavLink>
      <NavLink to="/project2">
        <li className="cursor-pointer hover:opacity-15">Project 2</li>
      </NavLink>
      <NavLink to="/project3">
        <li className="cursor-pointer hover:opacity-15">Project 3</li>
      </NavLink>
    </div>
  )
}

export default LandingPage
