const contentful = require('./contentful.config')

module.exports = {
  siteMetadata: {
    title: `title`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentful
    }
  ]
}
