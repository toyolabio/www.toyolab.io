import React from "react"
import Image from "gatsby-image"
import { Card, Icon } from "antd"

const { Meta } = Card

export default ({ properties }) => {
  const { name, avatar, bio, github, twitter, facebook, website } = properties

  let actions = []
  if (github)
    actions.push(
      <a target="_blank" href={`https://github.com/${github}`} rel="noopener noreferrer">
        <Icon type="github" />
      </a>
    )
  if (twitter)
    actions.push(
      <a target="_blank" href={`https://twitter.com/${twitter}`} rel="noopener noreferrer">
        <Icon type="twitter" />
      </a>
    )
  if (facebook)
    actions.push(
      <a target="_blank" href={`https://www.facebook.com/${facebook}`} rel="noopener noreferrer">
        <Icon type="facebook" />
      </a>
    )
  if (website)
    actions.push(
      <a target="_blank" href={website} rel="noopener noreferrer">
        <Icon type="home" />
      </a>
    )
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "auto" }}
      cover={
        <Image
          style={{
            width: 240-1,
            height: 240-1,
          }}
          imgStyle={{
            width: 240-2,
            height: 240-2,
          }}
          fluid={avatar.childImageSharp.fluid}
        />
      }
      actions={actions}
    >
      <Meta
        style={{
          height: 90,
        }}
        title={name}
        description={bio}
      />
    </Card>
  )
}
