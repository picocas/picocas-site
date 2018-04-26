const contentful = require('./contentful.config')

module.exports = {
  siteMetadata: {
    title: `title`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: contentful
    }
  ]
}
