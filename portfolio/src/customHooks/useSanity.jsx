import { useEffect, useState } from "react"
import sanityClient from "../sanityClient"
function useSanity() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
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
  }, [])
  return { projects }
}

export default useSanity
