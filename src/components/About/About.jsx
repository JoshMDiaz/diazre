import React from 'react'
import Slide from 'react-reveal/Slide'
import Scroll from 'react-scroll'
const scroller = Scroll.scroller;
 
const goToPricing = () => {
  scroller.scrollTo('pricingSection', {
    duration: 1000,
    delay: 50,
    smooth: true
  })
}

const About = () => {
  return (
    <div className="about padding max-width">
      <Slide left>
        <h2>About Us</h2>
      </Slide>
      <p>
        Diaz Real Estate, LLC specializes in Virtual Reality Photography in real estate. If you are listing a home, you will definitely want to have a virtual tour of your home. Buyers can get a much better feel for the space by touring your home online than by viewing a few pictures. Don't miss this opportunity!
      </p>
      <button onClick={goToPricing}>See Pricing</button>
    </div>
  );
}
 
export default About;