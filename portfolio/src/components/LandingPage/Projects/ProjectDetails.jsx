import React from "react"

function ProjectDetails({
  tags,
  name,
  isComingSoon,
  shortBio,
  tagClass,
  nameClass,
  shortBioClass,
  comingSoon,
  tagsAlignmentClass,
}) {
  return (
    <div className={`flex flex-col justify-between md:w-[320px]`}>
      <div>
        <div className={`h-[20px] overflow-hidden`}>
          <ul
            className={`list-none flex gap-x-[10px] text-[12px] text-[#494B50] uppercase ${tagClass} ${tagsAlignmentClass}`}
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
        <div className="w-full h-fit overflow-hidden">
          <p
            className={`text-[25px] md:text-[34px] overflow-hidden text-[#2C2D30] ${nameClass}`}
          >
            {name}
          </p>
        </div>
        {isComingSoon && (
          <p className={`text-[16px] text-[#67696D] ${comingSoon}`}>
            (coming soon)
          </p>
        )}
      </div>
      <div className="h-fit overflow-hidden">
        <p
          className={`text-[14px] mt-4 text-[#494B50] short_bio ${shortBioClass}`}
        >
          {shortBio}
        </p>
      </div>
    </div>
  )
}

export default ProjectDetails
