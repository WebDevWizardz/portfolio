import React, { useEffect } from "react"
import Hero from "./Hero"
import Navbar from "./Navbar"
import ContactSection from "./ContactSection"
import ProjectsSection from "./ProjectsSection"

function LandingPage() {
  return (
    <div className="font-display bg-[#fcfcfc]">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default LandingPage
