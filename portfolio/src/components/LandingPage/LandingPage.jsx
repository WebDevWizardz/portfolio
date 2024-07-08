import React, { useEffect, useState } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "./ContactSection"
import Loader from "../Loader"

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = () => {
    setIsLoading(false) // Switch to LandingPage after loader completes
  }

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll")
    } else {
      setTimeout(() => {
        document.body.classList.remove("no-scroll")
      }, 1000)
    }
  }, [isLoading])

  return (
    <div className="font-display bg-[#fcfcfc]">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Navbar />
      <Hero />
      <ProjectsSection />
      {/* 
      DISCLAIMER !
      Inside contact section there need to be instagram carousel component to achieve footer animation on scroll with early color change.
      I know ... life is brutal
      */}
      <ContactSection />
    </div>
  )
}

export default LandingPage
