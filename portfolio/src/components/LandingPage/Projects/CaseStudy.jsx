import React, { useRef, useEffect, useState } from "react"
import ScrollProgress from "./ScrollProgress"

function CaseStudy({ show, onClose, name, images, description }) {
  const scrollContainerRef = useRef(null)
  const [closing, setClosing] = useState(false)
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [show])

  const handleClose = () => {
    setClosing(true)
    document.querySelector(".cover_on_close").style.display = "block"
    setTimeout(() => {
      setClosing(false)
      onClose()
    }, 700)
  }

  if (!show && !closing) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`bg-black opacity-50 fixed inset-0 background-overlay ${
          closing ? "closing" : ""
        }`}
        onClick={handleClose}
      ></div>
      <div
        ref={scrollContainerRef}
        className={`absolute overflow-y-auto w-[85%] right-0 h-full p-[60px] bg-[#2E2E2E] text-white case_study ${
          closing ? "closing" : ""
        }`}
      >
        <div className="cover_on_close h-full w-full bg-[#2E2E2E]"></div>
        <button
          onClick={handleClose}
          className="relative mb-[60px] text-[14px] after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-[350ms] cursor-pointer"
        >
          Close
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
          <div className="flex-1">
            {images &&
              images.map((image, index) => (
                <img
                  key={index}
                  src={image.asset.url}
                  alt={`${index}`}
                  className="w-full h-auto object-contain mt-[20px]"
                />
              ))}
          </div>
        </div>
        <div className="flex justify-between mt-[60px]">
          <button
            onClick={handleClose}
            className="text-[14px] relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-[350ms] cursor-pointer"
          >
            Back to projects
          </button>
          <button className="text-[14px] relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-[350ms] cursor-pointer">
            Next project
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
