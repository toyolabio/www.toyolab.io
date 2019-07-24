import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Row, Col, Typography } from "antd"
import Description from "./description"
const { Title } = Typography
const Wrapper = styled.div`
  width: 100%;
  margin-top: auto;
  color: lightgray;
  text-align: center;
`

export default () => (
  <StaticQuery
    query={descriptionQuery}
    render={({ allMarkdownRemark: { edges } }) => {
      return (
        <>
          <Wrapper style={{ marginBottom: "20px" }}>
            <Title level={3} style={{ color: "gray" }}>
              やること
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
                  <Description properties={frontmatter} />
                </Col>
              ))}
            </Row>
          </Wrapper>
        </>
      )
    }}
  />
)

export const descriptionQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/description/" } }
      sort: { fields: [frontmatter___index], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            name
            description
          }
        }
      }
    }
  }
`
