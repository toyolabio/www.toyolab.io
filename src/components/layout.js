import React from "react"
import styled, { createGlobalStyle } from "styled-components/macro"
import { rhythm } from "../utils/typography"

import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ location: { pathname }, children }) => (
  <Container>
    <GlobalStyle />
    <Header location={pathname} />
    <main
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {children}
    </main>
    <Footer />
  </Container>
)

export default Layout
