import React from 'react'
// import carImg from '../../images/car.svg'
// import houseImg from '../../images/house.svg'
import Slide from 'react-reveal/Slide'
import Scroll from 'react-scroll'
import InterestedButton from '../Interested/Interested'
import Section from '../Section/Section';
import Title from '../Title/Title';

const ScrollElement = Scroll.Element;

const AboutPricing = () => {
  return (
    <ScrollElement name="pricingSection">
      <div className="pricing padding max-width">
        <Section>
          <Slide left>
            <Title beforeText="Just ask us">for a quote</Title>
          </Slide>
          <p className="description">The pricing for interior VR Tours are based on the square footage of the house. Exterior VR Tours available upon request - price will vary based on the acreage of the area needing to be covered. Please contact us to get a quote!</p>
          <InterestedButton text="Get a Quote" />
        </Section>
      </div>
    </ScrollElement>
  );
}
 
export default AboutPricing;