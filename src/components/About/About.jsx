import React from 'react'
import Slide from 'react-reveal/Slide'
import InterestedButton from '../Interested/Interested'

const About = () => {
  return (
    <div className="about padding max-width">
      <Slide left>
        <h2>About Us</h2>
      </Slide>
      <p>
        Diaz Real Estate, LLC specializes in Virtual Tour Photography for real estate. If you are listing a home or if you simply want to show off your space, you need to have a virtual tour! Your customers will get a much better feel for the space by touring the property online than by looking at a few pictures. Don't miss this opportunity!
      </p>
      <InterestedButton text="Get a Quote" />
    </div>
  );
}
 
export default About;