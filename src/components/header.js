import React from "react"
import { Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Menu, Icon } from "antd"

const MedifiedMenu = styled(Menu)`
  li {
    margin-bottom: 0;
  }
`

const Header = ({ location }) => (
  <MedifiedMenu selectedKeys={[location]} mode="horizontal">
    <Menu.Item key="/">
      <StaticQuery
        query={query}
        render={data => (
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <Img
              style={{
                marginTop: "1rem",
                marginLeft: "0.5rem",
                marginRight: "2rem",
              }}
              imgStyle={{ marginBottom: 0 }}
              durationFadeIn={1000}
              fixed={data.logo.childImageSharp.fixed}
            />
          </Link>
        )}
      />
    </Menu.Item>
    <Menu.Item key="/events">
      <Icon type="calendar" />
      <Link style={{ display: "inline" }} to={`/events`}>
        Events
      </Link>
    </Menu.Item>
    <Menu.Item key="/announcements">
      <Icon type="bell" />
      <Link style={{ display: "inline" }} to={`/announcements`}>
        Announcements
      </Link>
    </Menu.Item>
    <Menu.Item key="/blog">
      <Icon type="read" />
      <Link style={{ display: "inline" }} to={`/blog`}>
        Blog
      </Link>
    </Menu.Item>
    <Menu.Item key="/members">
      <Icon type="team" />
      <Link style={{ display: "inline" }} to={`/members`}>
        Members
      </Link>
    </Menu.Item>
    <Menu.Item key="/contact">
      <Icon type="mail" />
      <Link style={{ display: "inline" }} to={`/contact`}>
        Contact
      </Link>
    </Menu.Item>
  </MedifiedMenu>
)

export default Header

const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(height: 40) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
