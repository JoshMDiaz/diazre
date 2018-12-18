import React from 'react'
import Slide from 'react-reveal/Slide'
import InterestedButton from '../Interested/Interested'
import Title from '../Title/Title'
import Section from '../Section/Section';

const About = () => {
  return (
    <div className="about padding max-width">
      <Section>
        <Slide left>
          <Title beforeText="Why you should">
            <span>work with us</span>
          </Title>
        </Slide>
        <p>
          Diaz Real Estate, LLC specializes in Virtual Tour Photography for real estate. If you are listing a home or if you simply want to show off your unique space, you need to have a virtual tour! Your customers will get a much better feel for the space by touring the property online than by looking at a few pictures. Don't miss this opportunity!
        </p>
        <InterestedButton text="Get a Quote" />
      </Section>
    </div>
  );
}
 
export default About;