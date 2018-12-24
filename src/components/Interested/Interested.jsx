import React from 'react'

const InterestedButton = (props) => {
  const { text } = props;
  return (
    <a href="https://diazre.us19.list-manage.com/subscribe/post?u=3344b9f1941a28dcd26265a07&amp;id=acdfdaf584">
      <button>
        <span className="button-text-container">
          <i className="line before-line"></i>
          <span className="button-text">{text}</span>
          <i className="line after-line"></i>
        </span>
      </button>
    </a>
  );
}
 
export default InterestedButton;