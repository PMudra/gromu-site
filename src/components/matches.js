// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import styles from "./matches.module.css"

// const Matches = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allMatches(sort: { fields: matchday }) {
//         edges {
//           node {
//             id
//             awayTeam {
//               name
//             }
//             homeTeam {
//               name
//             }
//             matchday
//             status
//             fields {
//               scheduled
//               localTime
//               localDate
//             }
//             score {
//               fullTime {
//                 homeTeam
//                 awayTeam
//               }
//               halfTime {
//                 awayTeam
//                 homeTeam
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <h1>Spiele</h1>
//       <div className={styles.matches}>
//         {data.allMatches.edges.map(
//           ({
//             node: {
//               id,
//               homeTeam: { name: homeTeam },
//               awayTeam: { name: awayTeam },
//               score,
//               fields: { scheduled, localDate, localTime },
//             },
//           }) => (
//             <React.Fragment key={id}>
//               <span className={styles.team}>
//                 {homeTeam}
//               </span>
//               <div className={styles.info}>
//                 <span className={styles.small}>
//                   {localDate} {scheduled && localTime}
//                 </span>
//                 <span>
//                   {score.fullTime.homeTeam} : {score.fullTime.awayTeam}
//                 </span>
//                 <span className={styles.small}>
//                   ({score.halfTime.homeTeam} : {score.halfTime.awayTeam})
//                 </span>
//               </div>
//               <span className={styles.team}>{awayTeam}</span>
//             </React.Fragment>
//           )
//         )}
//       </div>
//     </>
//   )
// }

// export default Matches
