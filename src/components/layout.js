import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../scss/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'VR Photography powered by Diaz Real Estate, LLC in Utah County.' },
            { name: 'keywords', content: 'VR Photography, Real Estate, homes, photography, vr, utah county' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1260,
            padding: '0px 30px',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
