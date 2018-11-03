import React from 'react'
import Scroll from 'react-scroll'
const scroller = Scroll.scroller;
 
const goToPricing = () => {
  scroller.scrollTo('pricingSection', {
    duration: 1000,
    delay: 50,
    smooth: true
  })
}

const Banner = () => {
  return (
    <div className="banner padding max-width">
      <button onClick={goToPricing}>Pricing</button>
    </div>
  );
}
 
export default Banner;