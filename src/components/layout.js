import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/header'
import Footer from './Footer/footer'
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
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800" rel="stylesheet"></link>
          <script id="mcjs">
            {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3344b9f1941a28dcd26265a07/e2665b5f160a797bd4928eb48.js");`}
          </script>
        </Helmet>
        <Header />
        <div>
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
