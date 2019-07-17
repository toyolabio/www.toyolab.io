import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Member from "../components/member"

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const members = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Members" />

      <h1>Meet The Team</h1>
      <p>
        Our team of qualified accountants and financial consultants can help
        your business at any stage of it’s growth.
      </p>
      {members.map(({ node }, index) => (
        <Member memberData={node} key={index} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/members/" } }
      sort: { fields: [frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            name
            color
            avatar {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
