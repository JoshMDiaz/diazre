import React from 'react'
import bannerImg from '../../images/banner1.jpg'
import Title from '../Title/Title'

const Banner = () => {
  return (
    <div className="banner" style={{
      backgroundImage: `linear-gradient(0deg, rgba(4, 21, 51, 0.6), rgba(4, 21, 51, 0.7)), url(${bannerImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="banner-content">
        <h1>Virtual Tour Photography</h1>
        <Title beforeText="Showing off your">unique space</Title>
      </div>
    </div>
  );
}
 
export default Banner;