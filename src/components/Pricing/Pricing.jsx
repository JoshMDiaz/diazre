import React from 'react'
// import carImg from '../../images/car.svg'
// import houseImg from '../../images/house.svg'
import Slide from 'react-reveal/Slide'
import InterestedButton from '../Interested/Interested'
import Section from '../Section/Section'
import Title from '../Title/Title'

const AboutPricing = () => {
  return (
    <div className="pricing padding max-width" name="get-a-quote">
      <Section>
        <Slide down>
          <Title beforeText="Just ask us">for a quote</Title>
        </Slide>
        <p className="description">The pricing for interior VR Tours are based on the square footage of the house. Exterior VR Tours available upon request - price will vary based on the acreage of the area needing to be covered. Please contact us to get a quote!</p>
        <InterestedButton text="Get a Quote" />
      </Section>
    </div>
  );
}
 
export default AboutPricing;