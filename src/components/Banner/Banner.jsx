import React from 'react'
import bannerImg from '../../images/banner.jpg'
import logo from '../../images/logo_white.svg'
import Fade from 'react-reveal/Fade'

const Banner = () => {
  return (
    <div className="banner" style={{
      backgroundImage: `url(${bannerImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="banner-content">
        <Fade up>
          <img src={logo} alt="Diaz Real Estate, LLC" className="logo" />
        </Fade>
      </div>
    </div>
  );
}
 
export default Banner;