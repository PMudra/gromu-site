import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./matches.module.css"

const Matches = () => {
  const data = useStaticQuery(graphql`
    {
      allMatches(sort: { fields: matchday }) {
        edges {
          node {
            id
            awayTeam {
              name
            }
            homeTeam {
              name
            }
            matchday
            status
            fields {
              scheduled
              localTime
              localDate
            }
            score {
              fullTime {
                homeTeam
                awayTeam
              }
              halfTime {
                awayTeam
                homeTeam
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <>
      <h1>Spiele</h1>
      <div className={styles.matches}>
        {data.allMatches.edges.map(
          ({
            node: {
              id,
              homeTeam: { name: homeTeam },
              awayTeam: { name: awayTeam },
              score,
              fields: { scheduled, localDate, localTime },
            },
          }) => (
            <table key={id} className={styles.match}>
              <tr>
                <td>{homeTeam}</td>
                <td className={styles.right}>{score.fullTime.homeTeam}</td>
                <td>{localDate}</td>
              </tr>
              <tr>
                <td>{awayTeam}</td>
                <td className={styles.right}>{score.fullTime.awayTeam}</td>
                <td>{scheduled && localTime}</td>
              </tr>
            </table>
          )
        )}
      </div>
    </>
  )
}

export default Matches
