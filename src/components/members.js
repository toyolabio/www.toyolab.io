import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Row, Col, Typography } from "antd"
import Member from "./member"
const { Title } = Typography
const Wrapper = styled.div`
  width: 100%;
  margin-top: auto;
  color: lightgray;
  text-align: center;
`

export default () => (
  <StaticQuery
    query={membersQuery}
    render={({ allMarkdownRemark: { edges } }) => {
      return (
        <>
          <Wrapper>
            <Title level={3} style={{ color: "gray" }}>
              Members
            </Title>
            <Row gutter={16} justify="center" type="flex">
              {edges.map(({ node: { frontmatter } }, index) => (
                <Col
                  span={24}
                  sm={12}
                  md={8}
                  style={{ marginBottom: "2rem" }}
                  key={index}
                >
                  <Member properties={frontmatter} />
                </Col>
              ))}
            </Row>
            <Link to="/members">もっと見る</Link>
          </Wrapper>
        </>
      )
    }}
  />
)

export const membersQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/members/" }
        frontmatter: { index: { ne: null } }
      }
      sort: { fields: [frontmatter___index], order: ASC }
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
