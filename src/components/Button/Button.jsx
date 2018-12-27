import React from 'react'

const Button = ({ light, text, onClick, customClass }) => {
  return (
    <button className={`${light ? 'light' : ''} ${customClass ? customClass : ''}`} onClick={onClick}>
      <span className="button-text-container">
        <i className="line before-line"></i>
        <span className="button-text">{text}</span>
        <i className="line after-line"></i>
      </span>
    </button>
  );
}
 
export default Button