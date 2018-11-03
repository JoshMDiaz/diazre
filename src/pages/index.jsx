import React from 'react'
import Layout from '../components/layout'
import Portfolio from '../components/Portfolio/Portfolio';
import Banner from '../components/Banner/Banner';
import Pricing from '../components/Pricing/Pricing';
import Testimonials from '../components/Testimonials/Testimonials';

const IndexPage = () => (
  <Layout>
    <Banner />
    <Portfolio />
    <Pricing />
    <Testimonials />
  </Layout>
)

export default IndexPage
