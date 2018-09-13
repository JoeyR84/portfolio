import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import Header from './header'

const Layout = ({ children, location }) => (
  <div>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          image: imageSharp(original: { src: { regex: "/darkeysSmall/" } }) {
            sizes(maxWidth: 1240, grayscale: true) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      `}
      render={data => (
        <Container>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'Freelance portfolio', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header
            siteTitle={data.site.siteMetadata.title}
            image={data.image}
            location={location}
          />
          <div>{children}</div>
        </Container>
      )}
    />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled('div')``

export default Layout
