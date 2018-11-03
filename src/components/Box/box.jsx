import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Slide from 'react-reveal/Slide'

const Box = (props) => {
  const { link, image, name, num } = props;
  return (
    <Link to={link} className={`box ${num % 2 ? 'even' : 'odd'}`}>
      <Slide up >
        <div className={`home-picture`} style={{
          background: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%'
        }}></div>
      </Slide>
      <Slide right={num % 2 ? false : true} left={num % 2 ? true : false} >
        <div className={`home-info`}>
          <span>{name}</span>
        </div>
      </Slide>
    </Link>
  );
}
 
export default Box;

Box.proptypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
};