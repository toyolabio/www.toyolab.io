import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../../components/seo"
// import Layout from "../../components/layout"
import Member from "../../components/member"

const Members = props => {
  //
  return (
    <StaticQuery
      query={query}
      render={({ allMarkdownRemark: { edges: members } }) => {
        return (
          <div>
            <SEO title="Team" />
            <h1>Meet The Team</h1>
            <p>
              Our team of qualified accountants and financial consultants can
              help your business at any stage of it’s growth.
            </p>

            <div className="container pb-6">
              <div className="row">
                {members.map(edge => (
                  <Member
                    memberData={edge.node}
                    key={edge.node.frontmatter.name}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

export const query = graphql`
  query MembersQuery {
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

export default Members
