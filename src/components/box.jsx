import React, { Component } from 'react';
import { Link } from 'gatsby';

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
    const { show } = this.state;
    return (
      <Link to="#">
        <div className="box" style={{ background: 'lightgray' }} onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}>
          <div className={`overlay ${show ? 'show' : ''}`}>
            <span className="name">{this.props.name || 'test'}</span>
          </div>
        </div>
      </Link>
    );
  }
}
 
export default Box;