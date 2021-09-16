/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
      `gatsby-plugin-fontawesome-css`,
      'gatsby-plugin-react-helmet',
      {
          resolve: `gatsby-plugin-favicon`,
          options: {
              logo: "./assets/img/favicon.png",
          }
      }
  ]
};
