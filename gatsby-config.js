require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Asish Kakumanu`,
    description: `I'm a 26 year old software developer with a masters degree in computer science from SUNY Buffalo.`,
    author: `@asishkakumanu`,
    image: `./src/images/webview.png`,
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
      resolve: "gatsby-source-lastfm",
      options: {
        api_key: process.env.GATSBY_API_KEY,
        username: process.env.GATSBY_username,
        limit: 10, // the maximum number of playbacks to pull in
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-165054737-1", // Google
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
