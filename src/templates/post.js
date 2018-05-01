import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default ({ data, pathContext }) => {
  const post = data.contentfulPost
  const { previous, next } = pathContext
  return (
    <div>
      <Helmet title={`${post.title} - ${data.site.siteMetadata.title}`} />
      <h1>{post.title}</h1>
      <div>{post.date}</div>
      <div>{post.body.body}</div>

      {previous && (
        <div>
          prev: <Link to={`./${previous.id}`}>{previous.title}</Link>
        </div>
      )}
      {next && (
        <div>
          next: <Link to={`./${next.id}`}>{next.title}</Link>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      date
      body {
        body
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
