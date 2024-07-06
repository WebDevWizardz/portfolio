import React, { useState } from "react"
import Hero from "./Hero"
import Header from "./Header"
import ProjectsSection from "./ProjectsSection"
import InstagramSection from "./Instagram/InstagramSection"
import ContactSection from "./ContactSection"
import Loader from "../Loader"

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoaderComplete = () => {
    setIsLoading(false) // Switch to LandingPage after loader completes
  }

  return (
    <div className="font-display bg-[#fcfcfc]">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Header />
      <Hero />
      <ProjectsSection />
      <InstagramSection />
      <ContactSection />
    </div>
  )
}

export default LandingPage
