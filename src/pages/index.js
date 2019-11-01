import React from "react"
import Image from "../components/image"
import styles from "./index.module.css"

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
  <div className={styles.layout}>
    <section className={styles.section}>
      <div className={`${styles.intro} ${styles.content}`}>
        <div className={styles.logo}>
          <Image />
        </div>
        <div>
          <h1 style={{ marginTop: 0 }}>GroMu Fanclub</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <h2>Lorem ipsum</h2>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
          <h3>Lorem ipsum</h3>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>Spiele</h1>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>Spiele</h1>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>Spiele</h1>
        <p>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    </section>
    {/* <div
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
        
        <h1 style={{ textAlign: "center" }}>GroMu Werder Bremen Fanclub</h1>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(50, 50, 50, 0.14)",
          padding: "20px 20px",
        }}
      >
      </div>
    </div> */}
  </div>
)

export default IndexPage
