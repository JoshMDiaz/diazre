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
    <div className="banner">
      <img src="http://placehold.it/500x500" alt="temp" className="banner-media" />
      <div className="banner-content padding max-width">
        <button onClick={goToPricing}>Pricing</button>
      </div>
    </div>
  );
}
 
export default Banner;