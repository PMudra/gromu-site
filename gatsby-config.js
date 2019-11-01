require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `GroMu Fanclub`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GroMu Fanclub`,
        short_name: `GroMu`,
        start_url: `/`,
        background_color: `#d9e4de`,
        theme_color: `#d9e4de`,
        display: `minimal-ui`,
        icon: `src/images/gromu-01.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Hind` }],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        headers: {
          "X-Auth-Token": process.env.FOOTBALL_DATA_AUTH_TOKEN,
        },
        entitiesArray: [
          {
            url: `https://api.football-data.org/v2/teams/12`,
            name: `team`,
          },
          {
            url: `http://api.football-data.org/v2/teams/12/matches`,
            name: `matches`,
            entityLevel: `matches`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
