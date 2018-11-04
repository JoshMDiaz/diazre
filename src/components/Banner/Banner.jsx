import React from 'react'
import downArrow from '../../images/down_arrow.svg'

const Banner = () => {
  return (
    <div className="banner">
      <iframe title="bg-video" width="1920" height="1080" src="https://www.youtube.com/embed/MhkRUQuYza4?autoplay=1&loop=1&playlist=MhkRUQuYza4&controls=0&fs=0&rel=0&showinfo=0&disablekb=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="banner-media"></iframe>
      <div className="banner-content padding max-width">
        <img src={downArrow} alt="down arrow"/>
      </div>
    </div>
  );
}
 
export default Banner;