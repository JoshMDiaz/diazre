import React from 'react'

const MediaContent = ({ img, alt, children, reverse }) => {
  return (
    <div className={`media-content ${reverse ? 'reverse' : ''}`}>
      <div className="content">{children}</div>
      <div className="media">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
}
 
export default MediaContent;