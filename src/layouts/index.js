import React from 'react'
import Link from 'gatsby-link'

export default ({ children, data }) => (
  <div>
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
