import React from 'react'
import downArrow from '../../images/down_arrow.svg'
import Slide from 'react-reveal/Slide'
import Pulse from 'react-reveal/Pulse'
import bannerImg from '../../images/banner1.jpg'

const Banner = () => {
  return (
    <div className="banner" style={{
      backgroundImage: `linear-gradient(0deg, rgba(4, 21, 51, 0.6), rgba(4, 21, 51, 0.7)), url(${bannerImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="lines">
        { Array.apply(1, {length: 6}).map((e, i) => (
          <Slide down delay={Number(500 * (i + 1))} key={i}>
            <div className="line"></div>
          </Slide>
        ))}
      </div>
      <Pulse delay={5000} forever>
        <div className="banner-content padding max-width">
          <h3>Scroll</h3>
          <img src={downArrow} alt="down arrow"/>
        </div>
      </Pulse>
    </div>
  );
}
 
export default Banner;