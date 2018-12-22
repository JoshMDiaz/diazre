import React from 'react'
import bannerImg from '../../images/banner.jpg'
import Title from '../Title/Title'
import logo from '../../images/logo_white.svg'

const Banner = () => {
  return (
    <div className="banner" style={{
      backgroundImage: `url(${bannerImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="banner-content">
        <img src={logo} alt="Diaz Real Estate, LLC" className="logo" />
        <h1>Virtual Tour<br />Photography</h1>
        <Title beforeText="Showing off your">unique space</Title>
      </div>
    </div>
  );
}
 
export default Banner;