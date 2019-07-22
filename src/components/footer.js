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

const Column2 = ({ title }) => (
  <Col span={24} sm={12} md={8} style={{ marginBottom: "2rem" }}>
    <Title style={{ color: "lightgray" }} level={3}>
      {title}
    </Title>
    <a href="mailto:mail@mail.com?subject=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&amp;body=%E4%B8%8B%E8%A8%98%E3%81%AE%E9%A0%85%E7%9B%AE%E3%81%AB%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E8%A8%98%E5%85%A5%E3%81%97%E3%81%A6%E9%80%81%E4%BF%A1%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%0D%0A%0D%0A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%0D%0A%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%E3%80%8C%E3%80%8D%0D%0A%E9%9B%BB%E8%A9%B1%E7%95%AA%E5%8F%B7%EF%BC%9A%E3%80%8C%E3%80%8D%0D%0A%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E5%86%85%E5%AE%B9%EF%BC%9A%E3%80%8C%E3%80%8D%0D%0A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A%2A">
      mail@mail.com
    </a>
  </Col>
)

export default () => (
  <ModifiedFooter>
    <FooterWrapper>
      <Row gutter={16} type="flex">
        <Column
          title="Resources"
          links={[
            { title: "Events", path: `/events`, icon: "calendar" },
            { title: "Annoucements", path: `/announcements`, icon: "bell" },
            { title: "Blog", path: `/blog`, icon: "read" },
            { title: "Members", path: `/members`, icon: "team" },
          ]}
        />
        <Column
          title="Links"
          links={[
            { title: "Events", path: `/events`, icon: "calendar" },
            { title: "Annoucements", path: `/announcements`, icon: "bell" },
            { title: "Blog", path: `/blog`, icon: "read" },
          ]}
        />
        <Column
          title="Products"
          links={[{ title: "Events", path: `/events`, icon: "calendar" }]}
        />
        <Column2 title="Contact" />
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
