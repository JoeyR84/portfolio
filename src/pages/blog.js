import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <div>
      <h1>Blog</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}
              <span> - {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const postQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
