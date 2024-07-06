import React, { useEffect, useState } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"
import ProjectsSection from "./ProjectsSection"
import InstagramSection from "./Instagram/InstagramSection"
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
      <InstagramSection />
      <ContactSection />
    </div>
  )
}

export default LandingPage
