import React from 'react'

import Layout from '../components/layout'
import Box from '../components/box'

// Images
import centuryHome from '../images/century.jpg';

const goToPricing = () => {
  console.log('pricing');
}

const list = [
  {
    name: 'Century',
    link: 'https://players.cupix.com/preview/2OfQikoY?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiMTdlY2Y3MmVjZDFmN2Y5NTM1MWMzOWFlZGUzNjI5MWEiLCJpc3MiOiJ3ZWJhcGkuY3VwaXguY29tIiwiaWF0IjoxNTQwMjU4MjAxLCJleHAiOjE1NDAyNzI2NjEsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZSI6bnVsbH0.Jt8WxZ7lCz2-P90iqEPnHlNZmH1oRzZI5p9Aa50nM8g&utm_medium=referral&utm_source=editor.cupix.com&utm_campaign=Preview+tour&editor=true',
    image: centuryHome
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
        <Box {...e} key={i} />
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
