import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ children, media }) => {
  return (
    <div className="section">
      <div className="media-section">
        <div className="bg-color"></div>
        {media}
      </div>
      <div className="content-section">
        {children}
      </div>
    </div>
  );
}
 
export default Section

Section.proptypes = {
  children: PropTypes.element.isRequired,
  media: PropTypes.element.isRequired
};