import React from "react"
import { Global, css } from "@emotion/core"
import SEO from "./seo"
import Header from "./header"

const globalStyle = css`
  :root {
    /* https://www.canva.com/colors/color-palette-generator/ */
    --japanese-laurel: #04741c;
    --salem: #0a9b3e;
    --dark-slate-gray: #09110d;
    --light-steel-blue: #dbe5df;
    --medium-aquamarine: #73da8c;
  }
  @media (min-width: 480px) {
    html {
      font-size: 112.5%;
    }
  }
  @media (min-width: 720px) {
    html {
      font-size: 125%;
    }
  }
  body {
    background-color: var(--light-steel-blue);
  }
`

export default ({ children, title }) => (
  <>
    <SEO title={title} />
    <Global styles={globalStyle} />
    <Header />
    <main>{children}</main>
  </>
)
