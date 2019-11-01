import React from "react"
import classnames from "classnames"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./index.module.css"

const IndexPage = () => (
  <div className={styles.layout}>
    <SEO title="Startseite" />
    <section className={styles.section}>
      <div className={classnames(styles.intro, styles.content)}>
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
  </div>
)

export default IndexPage
