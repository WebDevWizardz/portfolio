import React from "react"
import { Link, useLocation } from "react-router-dom"

function Project() {
  const location = useLocation()
  const { name, imageLink, description } = location.state // odpowaida za przyjęcie stanu komponentu przekazanego wewnątrz NavLink

  console.log(description.type)

  return (
    <div className="project w-full font-display">
      <div className="bg-black opacity-50 w-full h-screen"></div>
      <div className="absolute overflow-y-auto top-0 right-0 h-full w-[80%] p-[60px] bg-[#2E2E2E] text-white">
        <button>
          <Link to="/">Close</Link>
        </button>
        <h2 className="text-[45px]">{name}</h2>
        <div className="overview flex w-full gap-[10px] justify-between mb-[80px]">
          <div className="text-[14px] font-extrathin flex flex-col">
            <h6 className="text-[#CBCBCB]">Project Type:</h6>
            {description.type.map((type) => {
              return <p>{type}</p>
            })}
          </div>
          <div className="text-[14px] font-extrathin flex flex-col">
            <h6 className="text-[#CBCBCB]">Stage:</h6>
            <p>{description.stage}</p>
          </div>
          <div className="text-[14px] font-extrathin flex flex-col w-[150px]">
            <h6 className="text-[#CBCBCB]">Deliverables:</h6>
            {description.deliverables.map((deliverable) => {
              return <p>{deliverable}</p>
            })}
          </div>
        </div>

        {/* MAPOWANIE ZDJĘĆ PRZEKAZANYCH W TABLICY Z BACKENDU / CMS */}

        <img
          src={imageLink}
          alt={name}
          className="w-full h-full object-cover"
        />
        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Project
