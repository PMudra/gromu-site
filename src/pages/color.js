import React from "react"
import Layout from "../components/layout"
import { Logo } from "../components/images"

const LoremIpsum = () =>
  "Ein nicht hoch genug zu schätzendes Bremer Faustpfand wird ihnen durch die enge Verzahnung und Durchlässigkeit zum Profiteam um Cheftrainer Florian Kohfeldt ermöglicht. „Eine viel bessere Konstellation wird es später wohl nur schwierig noch mal so geben“, ahnt Björn Schierenbeck und begründet: „Dass so viele Verantwortliche eine so große Nähe zum Nachwuchs haben, Kenntnisse darüber, wie Nachwuchsarbeit funktioniert, großes Interesse, Spieler aus dem Nachwuchs zu integrieren und auch enorme Ressourcen dafür freischalten.“"

const Text = ({ color }) => (
  <div style={{ color, padding: 50, minWidth: 150, maxWidth: 600 }}>
    <h1>GroMu Fanclub</h1>
    <h2>GroMu Fanclub</h2>
    <h3>GroMu Fanclub</h3>
    <h4>GroMu Fanclub</h4>
    <h5>GroMu Fanclub</h5>
    <h6>GroMu Fanclub</h6>
    <p>
      <LoremIpsum />
    </p>
  </div>
)

const Example = ({ backgroundColor }) => (
  <div style={{ backgroundColor, padding: 50 }}>
    <div style={{ maxWidth: 220 }}>
      <Logo />
    </div>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Text />
      <Text color="white" />
    </div>
  </div>
)

export default () => {
  return (
    <Layout>
      <Example backgroundColor="white" />
      <Example backgroundColor="var(--dark-slate-gray)" />
      <Example backgroundColor="var(--japanese-laurel)" />
      <Example backgroundColor="var(--salem)" />
      <Example backgroundColor="var(--light-steeel-blue)" />
      <Example backgroundColor="var(--medium-aquamarine)" />
    </Layout>
  )
}
