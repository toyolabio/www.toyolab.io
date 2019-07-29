import React from "react"
import { Card } from "antd"
import DevelopIcon from "../../content/descriptions/development/development.svg"
import WorkshopIcon from "../../content/descriptions/workshop/workshop.svg"
import NetworkIcon from "../../content/descriptions/networking/networking.svg"

const { Meta } = Card

export default ({ properties }) => {
  const { name, description } = properties
  let icon
  if (name === "開発") {
    icon = <DevelopIcon style={{ width: "200px", height: "150px" }} />
  } else if (name === "勉強会") {
    icon = <WorkshopIcon style={{ width: "200px", height: "150px" }} />
  } else if (name === "つながり") {
    icon = <NetworkIcon style={{ width: "200px", height: "150px" }} />
  }

  return (
    <>
      {icon}
      <Meta
        style={{
          height: 100,
        }}
        title={name}
        description={description}
      />
    </>
  )
}
