import React from "react"
import { graphql } from "gatsby"
import { Col, Row } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Member from "../components/member"

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const members = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Members" />

      <h1>運営メンバー</h1>
      <p>
        トヨらぼの活動に積極的にコミットしてくれているメンバーです。
      </p>
      <Row gutter={16} justify="center">
        {members.map(({ node }, index) => (
          <Col
            span={24}
            sm={12}
            md={8}
            key={index}
            style={{ marginBottom: "2rem" }}
          >
            <Member properties={node.frontmatter} />
          </Col>
        ))}
      </Row>
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
            github
            twitter
            facebook
            website
            skills
            bio
            avatar {
              childImageSharp {
                fluid(maxWidth: 512) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
