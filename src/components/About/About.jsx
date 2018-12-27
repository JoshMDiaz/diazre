import React from 'react'
import Slide from 'react-reveal/Slide'
import Title from '../Title/Title'
import laptopImg from '../../images/laptop.jpg'
import MediaContent from '../Section/MediaContent'
import Button from '../Button/Button'

const About = () => {
  return (
    <section className="about padding max-width" name="who-we-are">
      <Slide down>
        <Title beforeText="Why you should">
          <span>work with us</span>
        </Title>
      </Slide>
      <p>Diaz Real Estate, LLC specializes in Virtual Tour Photography for private and commercial real estate. If you are listing a home or if you simply want to show off your unique space, you need to have a virtual tour!</p>
      <label>What is a Virtual Tour?</label>
      <p>It is an immersive 360<sup>o</sup> walkthrough of a location. Your customers will feel like they are walking through your beautiful home, one-of-a-kind garden, top-notch hotel, unique bed and breakfast, or whatever the space that you choose to create a tour.</p>
      <MediaContent img={laptopImg} alt="vr camera">
        <label>I already have pictures...</label>
        <p>Great! High quality photos, along with a virtual tour, will surely get your customers excited about visiting! They will get a much better feel for the space by taking a virtual tour online before they decide to make the trip out and see it in person.</p>
      </MediaContent>
      <label>Who should use us?</label>
      <p>Simply put - anyone with a business and a physical space! For real estate agents, this may be the push that your potential buyers need to stop by and see your property. Wish more people would come to your bed and breakfast? Do you host weddings in your amazing backyard or unique building? The applications are endless! Don't miss this opportunity!</p>
      <a href="https://diazre.us19.list-manage.com/subscribe/post?u=3344b9f1941a28dcd26265a07&amp;id=acdfdaf584">
        <Button text="Get a Quote" />
      </a>
    </section>
  );
}
 
export default About;