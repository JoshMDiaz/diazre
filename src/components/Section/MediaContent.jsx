import React from 'react'

const MediaContent = ({ img, alt, children, reverse }) => {
  return (
    <div className={`media-content ${reverse ? 'reverse' : ''}`}>
      <div className="content">{children}</div>
      <div className="media">
        <div className="media-bg"></div>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
}
 
export default MediaContent;