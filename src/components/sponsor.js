import React from "react"
import Image from "gatsby-image"

function Sponsor({ sponsorData }) {
  return (
    <div>
      <Image fluid={sponsorData.frontmatter.logo.childImageSharp.fluid} />
    </div>
  )
}

export default Sponsor
