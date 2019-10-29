import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
  <div
    style={{
      padding: "20px 0",
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        maxWidth: 640,
        border: "1px solid rgba(50, 50, 50, 0.14)",
        borderRadius: "10px",
        boxShadow: "2px 4px 6px 1px rgba(50, 50, 50, 0.14)",
      }}
    >
      <div style={{ padding: "40px 20px 0 20px" }}>
        <div style={{ maxWidth: 300, margin: "0 auto" }}>
          <Image />
        </div>
        <h1 style={{ textAlign: "center" }}>GroMu Werder Bremen Fanclub</h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p> */}
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(50, 50, 50, 0.14)",
          padding: "20px 20px",
        }}
      >
        {/* Link */}
      </div>
    </div>
  </div>
)

export default IndexPage
