import React from "react"
import { graphql } from "gatsby"
import { Typography } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sponsors from "../components/sponsors"
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
          <Title level={3}>Go to the future</Title>
          <Paragraph>愛知県を中心に活動する、学生団体</Paragraph>
          <Paragraph>
            ここに文字を入力。ここに文字を入力。ここに文字を入力。ここに文字を入力。ここに文字を入力。ここに文字を入力。
            ここに文字を入力。ここに文字を入力。ここに文字を入力。ここに文字を入力。ここに文字を入力。ここに文字を入力。
          </Paragraph>
        </div>
        <div style={{ marginTop: 32, minWidth: 240, textAlign: "right" }}>
          <img
            src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
            alt="content"
          />
        </div>
      </div>
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
    }
  }
`
