import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ children, afterText, beforeText, customClass }) => {
  return (
    <div className="title">
      { beforeText && <span className="before-text">{beforeText}</span> }
      <span className={`highlighted ${customClass ? customClass : ''}`}>{children}</span>
      { afterText && <span className="after-text">{afterText}</span> }
    </div>
  );
}
 
export default Title

Title.proptypes = {
  children: PropTypes.element.isRequired,
  beforeText: PropTypes.element,
  afterText: PropTypes.element
};