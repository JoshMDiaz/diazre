import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Box = (props) => {
  const { link, image, name, num } = props;
  return (
    <Link to={link} className={`box ${num % 2 ? 'even' : 'odd'}`}>
      <div className={`home-picture animated ${num % 2 ? 'slideInRight' : 'slideInLeft'}`} style={{
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%'
      }}></div>
      <div className={`home-info animated ${num % 2 ? 'slideInLeft' : 'slideInRight'}`}>
        <span>{name}</span>
      </div>
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