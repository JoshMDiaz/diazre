import React from 'react'
import Slide from 'react-reveal/Slide'
import InterestedButton from '../Interested/Interested'
import Title from '../Title/Title'
import Particles from 'react-particles-js'

const AboutPricing = () => {
  return (
    <section className="pricing" name="get-a-quote">
      <div className="max-width padding">
        <Particles style={{ opacity: '.3'}}
        />
        <div className="pricing-content">
          <Slide down>
            <Title beforeText="Just ask us" customClass="white">for a quote</Title>
          </Slide>
          <p className="description">The pricing for interior VR Tours are based on the square footage of the house. Exterior VR Tours available upon request - price will vary based on the acreage of the area needing to be covered. Please contact us to get a quote!</p>
          <InterestedButton text="Get a Quote" />
        </div>
      </div>
    </section>
  );
}
 
export default AboutPricing;