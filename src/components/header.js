import React, { useState, useRef } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import ScrollLock from "react-scrolllock"
import Img from "gatsby-image"
import styled from "styled-components/macro"
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring"
import { Icon } from "../shared-components"

const Container = styled(animated.div)`
  display: ${props => (props.open ? "grid" : "none")};
  /* z-index: 15; */

  grid-template-columns: repeat(1, minmax(100px, 1fr));
  /* grid-gap: 10px; */
  padding: 100px 25px 400px 25px;
  background: white;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height, opacity;
  @media screen and (min-width: 800px) {
    display: none;
  }
`

const Item = styled(animated.div)`
  cursor: pointer;
  width: 100%;
  height: 70px;
  background: white;
  /* border-radius: 5px; */
  will-change: transform, opacity;
  padding: 10px;
  padding-left: 25px;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
`

function Header({ location }) {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { width, height, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { width: "100%", height: "0%", opacity: 0 },
    to: {
      width: open ? "100%" : "100%",
      height: open ? "100%" : "80%",
      opacity: open ? 1 : 0,
    },
  })
  const springRef2 = useRef()
  const { menuOpacity, displayMenu, ...rest2 } = useSpring({
    ref: springRef2,
    config: config.slow,

    from: { menuOpacity: 1, displayMenu: "inline-block" },
    to: {
      menuOpacity: open ? 0 : 1,
      displayMenu: open ? "none" : "inline-block",
    },
  })
  const springRef3 = useRef()
  const { closeOpacity, displayClose, ...rest3 } = useSpring({
    ref: springRef3,
    config: config.slow,
    from: { closeOpacity: 0, displayClose: "none" },
    to: {
      closeOpacity: open ? 1 : 0,
      displayClose: open ? "inline-block" : "none",
    },
  })

  const transRef = useRef()
  const transitions = useTransition(open ? MenuData : [], item => item.title, {
    ref: transRef,
    unique: true,
    trail: 400 / MenuData.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(
    open
      ? [springRef2, springRef3, springRef, transRef]
      : [transRef, springRef, springRef3, springRef2],
    [0, 0, 0, 0]
  )
  return (
    <div
      css={`
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
        position: sticky;
        top: 0;
        z-index: 25;
      `}
    >
      <div
        css={`
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        `}
      >
        <ScrollLock isActive={open}>
          <div
            css={`
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 5px 15px 5px 10px;
              height: 80px;
            `}
          >
            <StaticQuery
              query={query}
              render={data => (
                <Link to={`/`}>
                  <Img
                    imgStyle={{ marginBottom: 0 }}
                    durationFadeIn={1000}
                    fixed={data.logo.childImageSharp.fixed}
                  />
                </Link>
              )}
            />
            <div
              css={`
                display: flex;
                justify-content: space-around;
                align-items: center;
                @media screen and (max-width: 800px) {
                  display: none;
                }
              `}
            >
              {MenuData.filter((x, i) => i !== 0).map(item => (
                <Link
                  to={item.to}
                  key={item.title}
                  css={`
                    text-decoration: none;
                    color: ${item.to === location ? "#c50818" : "#04337a"};
                    :hover {
                      color: #c50818;
                      cursor: pointer;
                    }
                  `}
                >
                  <Item
                    css={`
                      font-size: 12px;
                    `}
                  >
                    <div
                      css={`
                        margin-right: 5px;
                      `}
                    >
                      {item.icon}
                    </div>
                    {item.title}
                  </Item>
                </Link>
              ))}
            </div>
            <div
              css={`
                padding: 10px;
                cursor: pointer;
                z-index: 10;
                @media screen and (min-width: 800px) {
                  display: none;
                }
              `}
              onClick={() => {
                set(open => !open)
              }}
            >
              <Icon
                name="menu"
                style={{ ...rest2, opacity: menuOpacity, display: displayMenu }}
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </Icon>
              <Icon
                name="x"
                style={{
                  ...rest3,
                  opacity: closeOpacity,
                  display: displayClose,
                }}
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </Icon>
            </div>
          </div>
        </ScrollLock>
        <Container
          open={open}
          style={{ ...rest, width: width, height: height, opacity: opacity }}
        >
          {transitions.map(({ item, key, props }) => (
            <Link
              css={`
                text-decoration: none;
                color: #04337a;
                :hover {
                  color: #c50818;
                }
              `}
              to={item.to}
              onClick={() => {
                if (location === item.to) {
                  set(open => !open)
                }
              }}
              key={key}
            >
              <Item style={{ ...props, background: item.css }}>
                <div
                  css={`
                    margin-right: 10px;
                  `}
                >
                  {item.icon}
                </div>
                {item.title}
              </Item>
            </Link>
          ))}
        </Container>
      </div>
    </div>
  )
}

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

const MenuData = [
  {
    title: "Home",
    to: "/",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    icon: (
      <Icon name="home">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </Icon>
    ),
  },
  {
    title: "Events",
    to: "/events",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    icon: (
      <Icon name="calendar">
        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </Icon>
    ),
  },
  {
    title: "Announcements",
    to: "/announcements",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    icon: (
      <Icon name="bell">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
      </Icon>
    ),
  },
  {
    title: "Blog",
    to: "/blog",
    css: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
    icon: (
      <Icon name="edit-3">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </Icon>
    ),
  },
  {
    title: "Members",
    to: "/members",
    css: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: (
      <Icon name="users">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </Icon>
    ),
  },
]
