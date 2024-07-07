import React from "react"

function ProjectDetails({
  tags,
  name,
  isComingSoon,
  shortBio,
  alignmentClass,
  tagsAlignmentClass,
}) {
  return (
    <div
      className={`flex flex-col justify-between md:w-[320px] ${alignmentClass}`}
    >
      <div className={`h-[20px] overflow-hidden`}>
        <ul
          className={`list-none flex gap-x-[10px] text-[12px] text-[#494B50] uppercase tags ${tagsAlignmentClass}`}
        >
          {tags.map((tag, index) => (
            <li key={index}>
              <span
                className={
                  index !== tags.length - 1
                    ? "pr-[10px] border-r-[1px] border-[#67696D]"
                    : "pl-0 pr-0"
                }
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-[25px] md:text-[34px] text-[#2C2D30]">{name}</p>
      {isComingSoon && (
        <p className="text-[16px] text-[#67696D]">(coming soon)</p>
      )}
      <p className="text-[14px] mt-4 text-[#494B50]">{shortBio}</p>
    </div>
  )
}

export default ProjectDetails
