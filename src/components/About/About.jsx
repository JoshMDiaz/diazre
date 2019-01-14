import React from 'react'
import Slide from 'react-reveal/Slide'
import Title from '../Title/Title'
import MediaContent from '../Section/MediaContent'

import exampleImg from '../../images/example.jpg'
import laptopImg from '../../images/laptop.jpg'
import backyardImg from '../../images/backyard.jpg'
import ModalButton from '../Form/ModalButton'

const About = () => {
  return (
    <section className="about padding max-width" name="who-we-are">
      <Slide down>
        <Title beforeText="Why you should">
          <span>work with us</span>
        </Title>
      </Slide>
      <p>Diaz Real Estate, LLC specializes in Virtual Tour Photography for private and commercial real estate. If you are listing a home or if you simply want to show off your unique space, you need to have a virtual tour!</p>
      <MediaContent img={exampleImg} alt="example vr">
        <label className="section-label">What is a virtual tour?</label>
        <p>It is an immersive 360<sup>o</sup> walkthrough of a location. Your customers will feel like they are walking through your beautiful home, one-of-a-kind garden, top-notch hotel, unique bed and breakfast, or whatever the space that you choose to create a tour.</p>
      </MediaContent>
      <MediaContent img={laptopImg} alt="vr camera" reverse>
        <label className="section-label">I already have pictures...</label>
        <p>Great! High quality photos, along with a virtual tour, will surely get your customers excited about visiting! They will get a much better feel for the space by taking a virtual tour online before they decide to make the trip out and see it in person.</p>
      </MediaContent>
      <MediaContent img={backyardImg} alt="awesome backyard">
        <label className="section-label">Is this for me?</label>
        <p>Simply put - anyone with a business and a physical space! For real estate agents, this may be the push that your potential buyers need to stop by and see your property. Wish more people would come to your bed and breakfast? Do you host weddings in your amazing backyard or unique building? The applications are endless! Don't miss this opportunity!</p>
        <ModalButton />
      </MediaContent>
    </section>
  )
}
 
export default About