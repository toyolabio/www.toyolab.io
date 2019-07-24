import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Typography } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sponsors from "../components/sponsors"
import Members from "../components/members"
import AboutUs from "../components/aboutus"

const { Title, Paragraph } = Typography

export default ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Index" />
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ flex: 1 }}>
          <Title level={3}>
            Toyohashi Technology Laboratory
            <br></br>
            略して「トヨらぼ」
          </Title>
          <Paragraph>
            私たちは、豊橋市を拠点に活動する学生エンジニアのコミュニティです。
          </Paragraph>
          <Paragraph>
            技術のスキルアップを志す学生同士が集い、知見を共有していくことで、学生同士企業や地域・自治体、大学などと連携し、メンバー各々のスキルアップを図るとともに、
            多くに人に使ってもらえる「モノ」を作り出していきます。
          </Paragraph>
        </div>
        <div style={{ marginTop: 32, minWidth: 240, textAlign: "right" }}>
          <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Gatsby Docs are awesome"
          />
        </div>
      </div>
      <AboutUs />
      <Members />
      <Sponsors />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    file(relativePath: { eq: "mainVisual.jpg" }) {
      childImageSharp {
        fluid(maxWidth:800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
