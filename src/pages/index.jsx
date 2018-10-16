import React from 'react'

import Layout from '../components/layout'

const goToPricing = () => {
  console.log('pricing');
}

const IndexPage = () => (
  <Layout>
    {/* Section 1 - banner with possible video of VR? Call to action to scroll down to pricing */}
    <div className="banner">
      things
      <button onClick={goToPricing}>See Pricing</button>
    </div>
    {/* Section 2 - portfolio examples with short about at the top */}
    <div className="portfolio">
     <p>This is the portfolio / about section</p>
    </div>
    {/* Section 3 - pricing - 10 cents / sq ft interior only. Exterior available upon request and price will be determined on exterior acreage */}
    <div className="pricing">
     <p>This is the pricing section</p>
    </div>
    {/* Section 4 - testimonials */}
    <div className="testimonials">
     <p>This is the testimonials section</p>
    </div>
  </Layout>
)

export default IndexPage
