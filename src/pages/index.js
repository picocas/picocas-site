import React from 'react'
import graphql from 'graphql'
import Link from 'gatsby-link'

export default ({ data: { allContentfulPost: posts } }) => {
  return (
    <div>
      <h4>total: {posts.totalCount} Posts</h4>
      {posts.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={`posts/${node.id}`}>
            <h3>{node.title}</h3>
          </Link>
          <p>{node.date}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query BlogPostsQuery {
    allContentfulPost(sort: { fields: [date], order: DESC }, limit: 5) {
      totalCount
      edges {
        node {
          id
          title
          date(formatString: "YYYY/MM/DD")
        }
      }
    }
  }
`
