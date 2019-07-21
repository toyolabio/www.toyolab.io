import React from "react"
import Image from "gatsby-image"
import { Card } from "antd"

const { Meta } = Card

export default ({ node }) => {
  const { title, date, cover } = node.frontmatter
  const { excerpt } = node

  return (
    <Card
      hoverable
      style={{ margin: "auto" }}
      cover={<Image fluid={cover.childImageSharp.fluid} />}
    >
      <Meta title={title} description={date} />
    </Card>
  )
}
