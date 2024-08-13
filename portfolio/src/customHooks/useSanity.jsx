import { useEffect, useState } from "react"
import sanityClient from "../sanityClient"

function useSanity() {
  const [projects, setProjects] = useState([])
  const [reelData, setReelData] = useState([])
  useEffect(() => {
    //Fetch projects data
    sanityClient
      .fetch(
        `*[_type == "project"] | order(_updatedAt desc) {
                name,
                "slug": slug.current,
                description,
                shortBio,
                tags,
                isComingSoon,
                images[]{asset->{url}}
              }`
      )
      .then((data) => {
        setProjects(data)
      })
      .catch(console.error)

    //Fetch reel data
    sanityClient
      .fetch(
        `*[_type == "reel"] | order(_updatedAt desc) {
                name,
               "fileUrl": file.asset->url,
               "fileName": file.asset->originalFilename
              }`
      )
      .then((data) => {
        setReelData(data)
      })
      .catch(console.error)
  }, [])
  return { projects, reelData }
}

export default useSanity
