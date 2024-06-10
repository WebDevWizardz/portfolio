import React, { useState, useEffect } from "react"

const ScrollProgress = ({ scrollContainerRef }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop
      const scrollHeight =
        scrollContainerRef.current.scrollHeight -
        scrollContainerRef.current.clientHeight
      const scrolled = (scrollTop / scrollHeight) * 100
      setScrollPercentage(scrolled)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [scrollContainerRef])

  return (
    <div className="absolute left-[-47px] top-0 bottom-0 w-8 flex flex-col items-center justify-between p-2 h-[200px]">
      <div className="text-white text-[11px]] mt-2">
        {Math.round(scrollPercentage)}%
      </div>
      <div className="relative h-full w-1 bg-gray-400 rounded-full mt-2 mb-2">
        <div
          className="absolute left-0 right-0 bg-gray-700 rounded-full"
          style={{ height: `${scrollPercentage}%`, bottom: 0 }}
        ></div>
      </div>
    </div>
  )
}

export default ScrollProgress
