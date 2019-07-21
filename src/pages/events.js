import React from "react"
import { graphql } from "gatsby"
import { Col, Row } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const events = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Events" />
      <Row gutter={16} justify="center">
        {events.map(({ node }, index) => (
          <Col span={24} key={index} style={{ marginBottom: "2rem" }}>
            <Event node={node} />
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
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            cover {
              childImageSharp {
                fluid(maxWidth: 2100) {
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
