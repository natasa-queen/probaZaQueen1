/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  siteMetadata:{
    title: "ByMe",
    description: "Proba za Gatsby sajt",
    author: "@natasa",
    // image: `/static/favicon.ico`,
    // siteUrl: `https://duhovnost.netlify.app`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-static-cms`,


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Proba za Gatsby WebSite`,
        short_name: `Gatsby test`,
        description: `Proba za cool web stranicu`,
        lang: `bs`,
        display: `standalone`,
        icon: `static/logo1.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Cool Website`,
            short_name: `Cool`,
            description: `Trying to make Cool GatsbyJs WebSite`,
          },
        ],
      },
    },


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `md`,
        // Path to the directory
        path: `${__dirname}/content`,
      },
    },


  ],
}
