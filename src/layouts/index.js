import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Link to={`/`}>
      <h2>{data.site.siteMetadata.title}</h2>
    </Link>
    {children()}
  </div>
)

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
