import React from 'react'

import Layout from '../components/layout'
import Box from '../components/box'

const goToPricing = () => {
  console.log('pricing');
}

const list = [
  {
    name: 'Century',
    link: '#'
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];

const IndexPage = () => (
  <Layout>

    {/* Section 1 - banner with possible video of VR? Call to action to scroll down to pricing */}
    <div className="banner">
      things
      <button onClick={goToPricing}>See Pricing</button>
    </div>
    {/* Section 2 - portfolio examples with short about at the top */}
    <div className="portfolio">
     <p>Diaz Real Estate, LLC specializes in Virtual Reality Photography in real estate. If you are listing a home, you will definitely want to have a virtual tour of your home. Buyers can get a much better feel for the space by touring your home online than by viewing a few pictures. Don't miss this opportunity!</p>
     <h2>Our Work</h2>
     <div className="list">
      { list.map((e, i) => (
        <Box name={e.name} key={i} />
      ))}
     </div>
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
