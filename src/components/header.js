import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Logo } from "./images"

const LogoText = styled.h2`
  color: white;
  margin-bottom: 16px;
`

const headerStyle = css`
  background-color: var(--salem);
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 16px;
`

export default () => (
  <header css={headerStyle}>
    <LogoText css={{ marginRight: 8 }}>GroMu</LogoText>
    <Logo css={{ width: "4rem" }} />
    <LogoText css={{ marginLeft: 4 }}>Fanclub</LogoText>
  </header>
)
