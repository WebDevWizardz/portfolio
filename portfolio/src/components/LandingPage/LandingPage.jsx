import React from "react"
import Hero from "./Hero"
import Header from "./Header"
import ProjectsSection from "./ProjectsSection"
import InstagramSection from "./Instagram/InstagramSection"
import ContactSection from "./ContactSection"

function LandingPage() {
  return (
    <div className="font-display bg-[#fcfcfc]">
      <Header />
      <Hero />
      <ProjectsSection />
      <InstagramSection />
      <ContactSection />
    </div>
  )
}

export default LandingPage
