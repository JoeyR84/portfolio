import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data, location }) => (
  <Layout location={location}>
    <div>
      <h1>Blog</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node, props }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              {console.log(node)}
              <h3>
                {node.frontmatter.title}
                <span> - {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
