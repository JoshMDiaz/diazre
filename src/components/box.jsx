import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  showOverlay = () => {
    this.setState({ show: true });
  }

  hideOverlay = () => {
    this.setState({ show: false });
  }

  render() { 
    const { show } = this.state,
          { link, image, name } = this.props;
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="box" style={{
          background: image ? `url(${image})` : 'lightgray',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%'
        }} onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}>
          <div className={`overlay ${show ? 'show' : ''}`}>
            <span className="name">{name || 'test'}</span>
          </div>
        </div>
      </a>
    );
  }
}
 
export default Box;