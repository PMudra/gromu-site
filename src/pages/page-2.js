import React from "react"
import { graphql } from "gatsby"

const SecondPage = ({ data }) => {
  console.log(data)

  return (
    <div>
      {data.allIcal.edges.map(
        ({ node: { id, description, start, summary, location } }) => (
          <ul key={id}>
            <li>{description}</li>
            <li>{start}</li>
            <li>{summary}</li>
            <li>{location}</li>
          </ul>
        )
      )}
    </div>
  )
}

export const query = graphql`
  {
    allIcal(sort: { fields: start }) {
      edges {
        node {
          description
          location
          id
          end
          start
          summary
        }
      }
    }
  }
`

export default SecondPage
