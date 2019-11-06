import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "gromu-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      alt="GroMu Logo"
      fluid={data.file.childImageSharp.fluid}
      className={className}
    />
  )
}

export { Logo }
