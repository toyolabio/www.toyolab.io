import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Sponsor from "./sponsor"

function SponsorList() {
  return (
    <StaticQuery
      query={sponsorList}
      render={({ allMarkdownRemark: { edges: sponsors } }) => {
        return (
          <div>
            {sponsors.map(edge => (
              <Sponsor
                sponsorData={edge.node}
                key={edge.node.frontmatter.name}
              />
            ))}
          </div>
        )
      }}
    />
  )
}
export default SponsorList

const sponsorList = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/sponsors/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            name
            logo {
              childImageSharp {
                fluid(maxHeight: 150) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
