import React from "react"
import { Link } from "react-router-dom"

function Project2() {
  return (
    <div>
      <h1 className="text-[100px]">Project 2</h1>
      <button className="button-1">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  )
}

export default Project2
