import React from 'react'
import downArrow from '../../images/down_arrow.svg'
import Slide from 'react-reveal/Slide'
import Pulse from 'react-reveal/Pulse'

const Banner = () => {
  return (
    <div className="banner">
      <iframe title="bg-video" width="1920" height="1080" src="https://www.youtube.com/embed/MhkRUQuYza4?autoplay=1&loop=1&playlist=MhkRUQuYza4&controls=0&fs=0&rel=0&showinfo=0&disablekb=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="banner-media"></iframe>
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