require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Asish Kakumanu`,
    description: `I'm a 26 year old software developer / full-stack developer / front-end developer with a masters degree in computer science from SUNY Buffalo.`,
    author: `@asishkakumanu`
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-force-file-loader`,
    //   options: {
    //     rules: [
    //       "fonts" /* Matches Gatsby default rules for fonts */,
    //       "images" /* Matches Gatsby default rules for images */,
    //       "media" /* Matches Gatsby default rules for media (video/audio) */,
    //     ],
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url:
          "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=asishkakumanu&api_key=c381bcb2ced52d2f323ff0887021ac4b&format=json",
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        // Request body
        data: {},
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `posts`,
        // Optionally save the JSON data to a file locally
        // Default is false
        localSave: false,
        // Optionally re-source data when it changes and
        // `gatsby develop` is running.
        // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
        // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
        // Default is false
        enableDevRefresh: true
      }
    },
    {
      resolve: "gatsby-source-lastfm",
      options: {
        api_key: process.env.GATSBY_API_KEY,
        username: process.env.GATSBY_username,
        limit: 10 // the maximum number of playbacks to pull in
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
