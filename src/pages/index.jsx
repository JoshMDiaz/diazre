import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Pricing from '../components/Pricing/Pricing'
// import Testimonials from '../components/Testimonials/Testimonials'

const IndexPage = () => (
  <Layout>
    <div className="banner-placeholder"></div>
    <Banner />
    <div className="site-content">
      <About />
      <Portfolio />
      <Pricing />
      {/* <Testimonials /> */}
    </div>
  </Layout>
)

export default IndexPage
