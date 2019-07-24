import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Row, Col, Typography, Icon } from "antd"
const { Title, Text } = Typography

const ModifiedFooter = styled.footer`
  width: 100%;
  background-color: #222;
  margin-top: auto;
  color: lightgray;
`

const FooterWrapper = styled.div`
  padding: 2rem;
`

const CopyrightWrapper = styled.div`
  text-align: center;
`
const Column = ({ title, links }) => (
  <Col span={24} sm={12} md={8} style={{ marginBottom: "2rem" }}>
    <Title style={{ color: "lightgray" }} level={3}>
      {title}
    </Title>
    {links.map(link => (
      <Link key={link.title} style={{ display: "block" }} to={link.path}>
        <Text style={{ color: "lightgray" }}>
          {link.icon && (
            <Icon
              style={{ color: "lightgray", marginRight: "5px" }}
              type={link.icon}
            />
          )}
          {link.title}
        </Text>
      </Link>
    ))}
  </Col>
)

const Column2 = ({ title, links }) => (
  <Col span={24} sm={12} md={8} style={{ marginBottom: "2rem" }}>
    <Title style={{ color: "lightgray" }} level={3}>
      {title}
    </Title>
    {links.map(link => (
      <a
        style={{ display: "block" }}
        href={link.path}
        target="_blank"
        rel="noopener noreferrer"
        key={link.title}
      >
        <Text style={{ color: "lightgray" }}>
          {link.icon && (
            <Icon
              style={{ color: "lightgray", marginRight: "5px" }}
              type={link.icon}
            />
          )}
          {link.title}
        </Text>
      </a>
    ))}
  </Col>
)

export default () => (
  <ModifiedFooter>
    <FooterWrapper>
      <Row gutter={16} type="flex">
        <Column
          title="Resources"
          links={[
            { title: "Home", path: `/`, icon: "home" },
            { title: "Events", path: `/events`, icon: "calendar" },
            { title: "Annoucements", path: `/announcements`, icon: "bell" },
            { title: "Blog", path: `/blog`, icon: "read" },
            { title: "Members", path: `/members`, icon: "team" },
          ]}
        />
        <Column2
          title="Links"
          links={[
            {
              title: "Twitter",
              path: `https://twitter.com/toyolabio/`,
              icon: "twitter",
            },
            {
              title: "Facebook",
              path: `https://www.facebook.com/toyolabio/`,
              icon: "facebook",
            },
          ]}
        />

        <Column2
          title="Contact"
          links={[
            {
              title: "Mail(contact@toyolab.io)",
              path: `mailto:contact@toyolab.io`,
              icon: "mail",
            },
          ]}
        />
        <Col span={24}>
          <CopyrightWrapper>
            © {new Date().getFullYear()}, {` `}
            Toyohashi Technology Laboratory All right reserved.
          </CopyrightWrapper>
        </Col>
      </Row>
    </FooterWrapper>
  </ModifiedFooter>
)
