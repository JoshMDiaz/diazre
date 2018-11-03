import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Pricing from '../components/Pricing/Pricing';
// import Testimonials from '../components/Testimonials/Testimonials';

const IndexPage = () => (
  <Layout>
    <Banner />
    <About />
    <Portfolio />
    <Pricing />
    {/* <Testimonials /> */}
  </Layout>
)

export default IndexPage
