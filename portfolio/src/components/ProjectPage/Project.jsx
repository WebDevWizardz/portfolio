import React, { useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import ScrollProgress from "./ScrollProgress"

function Project() {
  const location = useLocation()
  const { name, images, description } = location.state || {}
  const scrollContainerRef = useRef(null)

  return (
    <div className="project w-full font-display relative">
      <div className="bg-black opacity-50 w-full h-screen transition-opacity duration-[1000ms]"></div>
      <div
        ref={scrollContainerRef}
        className="absolute overflow-y-auto top-0 right-0 h-full w-[80%] p-[60px] bg-[#2E2E2E] text-white transition-transform duration-[2500ms]"
      >
        <button className="relative mb-[60px]">
          <Link to="/">Close</Link>
        </button>
        <h2 className="text-[45px] mb-[40px]">{name}</h2>
        <div className="overview flex w-full gap-[10px] justify-between mb-[60px]">
          <div className="text-[14px] font-extrathin flex flex-col">
            <h6 className="text-[#CBCBCB]">Project Type:</h6>
            {description.type.map((type, index) => (
              <p key={index}>{type}</p>
            ))}
          </div>
          <div className="text-[14px] font-extrathin flex flex-col">
            <h6 className="text-[#CBCBCB]">Stage:</h6>
            <p>{description.stage}</p>
          </div>
          <div className="text-[14px] font-extrathin flex flex-col w-[150px]">
            <h6 className="text-[#CBCBCB]">Deliverables:</h6>
            {description.deliverables.map((deliverable, index) => (
              <p key={index}>{deliverable}</p>
            ))}
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="fixed flex flex-col justify-center h-full w-[50px]">
            <ScrollProgress scrollContainerRef={scrollContainerRef} />
          </div>
          <div className="flex-1 ml-[30px]">
            {images &&
              images.map((link, index) => (
                <img
                  key={index}
                  src={link}
                  alt={`${index}`}
                  className="w-full h-auto object-contain mt-[20px]"
                />
              ))}
          </div>
        </div>
        <div className="flex justify-between mt-[60px]">
          <Link to="/">
            <button className="text-[14px] relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-[350ms] cursor-pointer">
              Back to projects
            </button>
          </Link>
          <Link to="/">
            <button className="text-[14px] relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-[350ms] cursor-pointer">
              Next project
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
