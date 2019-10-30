import React from "react"
import { graphql } from "gatsby"

const SecondPage = ({ data }) => <div>{data.team.venue}</div>

export const query = graphql`
  {
    team(alternative_id: { eq: 12 }) {
      venue
    }
  }
`

export default SecondPage
