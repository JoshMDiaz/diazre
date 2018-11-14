import React from 'react'
import carImg from '../../images/car.svg'
import houseImg from '../../images/house.svg'
import Slide from 'react-reveal/Slide'
import Scroll from 'react-scroll'
import InterestedButton from '../Interested/Interested'

const ScrollElement = Scroll.Element;

const listItems = [
  {
    img: houseImg,
    alt: 'house',
    // text: '$0.10 per sq ft'
  },
  {
    img: carImg,
    alt: 'car',
    // text: '$0.15 per mile'
  }
]

const AboutPricing = () => {
  return (
    <ScrollElement name="pricingSection">
      <div className="pricing padding max-width">
        <Slide left>
          <h2>Get a Quote</h2>
        </Slide>
        <p className="description">The pricing for interior VR Tours are based on the square footage of the house. Exterior VR Tours available upon request - price will vary based on the acreage of the area needing to be covered. Please contact us to get a quote!</p>
        <InterestedButton text="I Need This" />
        {/* <ul>
          { listItems.map((e, i) => (
            <Slide key={i} left={i % 2 ? true : false} right={i % 2 ? false : true}>
              <li className={`price-bullet ${e.alt}`}>
                <img src={e.img} alt={e.alt} />
                <RubberBand>
                  <span>{e.text}</span>
                </RubberBand>
              </li>
            </Slide>
          ))}
        </ul> */}
      </div>
    </ScrollElement>
  );
}
 
export default AboutPricing;