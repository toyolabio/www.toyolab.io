import React from "react"
import { Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components/macro"
import { Menu, Icon } from "antd"

const MedifiedMenu = styled(Menu)`
  border-bottom: none;
  li {
    margin-bottom: 0;
  }
`

const Header = ({ location }) => (
  <React.Fragment>
    <MedifiedMenu
      selectedKeys={[location]}
      mode="horizontal"
      css={`
        display: flex;
        align-items: center;

        @media screen and (min-width: 840px) {
          display: none;
        }
      `}
    >
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
      <Menu.Item key="/events">
        <Icon type="calendar" />
        <Link
          style={{ display: "inline", borderBottom: "none" }}
          to={`/events`}
        >
          Events
        </Link>
      </Menu.Item>
      <Menu.Item key="/announcements">
        <Icon type="bell" />
        <Link
          style={{ display: "inline", borderBottom: "none" }}
          to={`/announcements`}
        >
          Announcements
        </Link>
      </Menu.Item>
      <Menu.Item key="/blog">
        <Icon type="read" />
        <Link style={{ display: "inline", borderBottom: "none" }} to={`/blog`}>
          Blog
        </Link>
      </Menu.Item>
      <Menu.Item key="/members">
        <Icon type="team" />
        <Link
          style={{ display: "inline", borderBottom: "none" }}
          to={`/members`}
        >
          Members
        </Link>
      </Menu.Item>
      <Menu.Item key="/contact">
        <Icon type="mail" />
        <Link
          style={{ display: "inline", borderBottom: "none" }}
          to={`/contact`}
        >
          Contact
        </Link>
      </Menu.Item>
    </MedifiedMenu>
    <nav
      css={`
        display: none;
        @media screen and (min-width: 840px) {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
      `}
    >
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
                display: "inline-block",
              }}
              imgStyle={{ marginBottom: 0 }}
              durationFadeIn={1000}
              fixed={data.logo.childImageSharp.fixed}
            />
          </Link>
        )}
      />
      <MedifiedMenu
        selectedKeys={[location]}
        mode="horizontal"
        style={{ borderBottom: "none" }}
      >
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
    </nav>
  </React.Fragment>
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
