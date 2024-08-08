import React from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

const navItems = [
  { label: "Work", mobileLabel: "01", target: "#work", offsetY: 200 },
  {
    label: "Playground",
    mobileLabel: "02",
    url: "https://www.instagram.com/karo.dsgn",
  },
  { label: "Resume", mobileLabel: "03", url: "https://read.cv/karolinahess" },
  {
    label: "Contact",
    mobileLabel: "04",
    target: "#contact",
    offsetY: -100,
    duration: 1.5,
  },
]

function NavLinks({ isMobile, onLinkClick }) {
  const handleScrollTo = (target, offsetY = 0, duration = 1) => {
    gsap.to(window, {
      duration,
      scrollTo: { y: target, offsetY },
    })
    if (onLinkClick) onLinkClick()
  }

  return (
    <>
      {navItems.map((item, index) =>
        item.url ? (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={item.url}
            className="text-bottom-line"
          >
            {isMobile && (
              <span className="mr-[35px] text-[10px]">{item.mobileLabel}</span>
            )}
            {item.label}
          </a>
        ) : (
          <p
            key={index}
            className="text-bottom-line"
            onClick={() =>
              handleScrollTo(item.target, item.offsetY, item.duration)
            }
          >
            {isMobile && (
              <span className="mr-[35px] text-[10px]">{item.mobileLabel}</span>
            )}
            {item.label}
          </p>
        )
      )}
    </>
  )
}

export default NavLinks
