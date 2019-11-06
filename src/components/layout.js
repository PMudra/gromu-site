import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import facepaint from "facepaint"
import SEO from "./seo"
import Header from "./header"

const breakpoints = [480, 720]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const globalStyle = css`
  :root {
    /* https://www.canva.com/colors/color-palette-generator/ */
    --japanese-laurel: #04741c;
    --salem: #0a9b3e;
    --dark-slate-gray: #09110d;
    --light-steel-blue: #dbe5df;
    --medium-aquamarine: #73da8c;
  }
  body {
    background-color: var(--light-steel-blue);
    min-width: 320px;
  }
  ${mq({ html: { fontSize: ["100%", "112.5%", "125%"] } })}
`

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  ${mq({ padding: [12, 24] })}
`

export default ({ children, title }) => (
  <>
    <SEO title={title} />
    <Global styles={globalStyle} />
    <Header />
    <Main>{children}</Main>
  </>
)
