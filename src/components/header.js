import React from "react"
import Logo from "./image"

export default () => (
  <header
    style={{
      backgroundColor: "var(--salem)",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      padding: 16,
    }}
  >
    <h2 style={{ marginBottom: 16, paddingRight: 8 }}>GroMu</h2>
    <div style={{ width: "4rem" }}>
      <Logo />
    </div>
    <h2 style={{ marginBottom: 16, paddingLeft: 4 }}>Fanclub</h2>
  </header>
)
