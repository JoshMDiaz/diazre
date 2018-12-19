import React from 'react'
import bannerImg from '../../images/banner1.jpg'
import Title from '../Title/Title'
import Section from '../Section/Section'

const Banner = () => {
  return (
    <div className="banner" style={{
      backgroundImage: `linear-gradient(0deg, rgba(4, 21, 51, 0.6), rgba(4, 21, 51, 0.7)), url(${bannerImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="banner-content">
        <Section media={<img src={'http://placehold.it/500x300'} alt="" />}>
          <h1>Virtual Tour<br />Photography</h1>
          <Title beforeText="Showing off your">unique space</Title>
        </Section>
      </div>
    </div>
  );
}
 
export default Banner;