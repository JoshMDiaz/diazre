import React from 'react'
import downArrow from '../../images/down_arrow.svg'
import Slide from 'react-reveal/Slide'
import Pulse from 'react-reveal/Pulse'

const Banner = () => {
  return (
    <div className="banner">
      <img src="http://placehold.it/1000x500" alt="test" className="banner-media"/>
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