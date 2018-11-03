import React, { Component } from 'react'
import PropTypes from 'prop-types'
import x from '../../images/x.svg'

class CloseModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleClass: ''
    }
  }

  showCircleClass = () => {
    this.setState({
      circleClass: 'show-circle'
    });
  }

  hideCircleClass = () => {
    this.setState({
      circleClass: 'hide-circle'
    });
  }

  render() {
    const { circleClass } = this.state,
          { closeModal } = this.props;
    return (
      <span className={`close cursor-pointer ${circleClass}`} onMouseEnter={this.showCircleClass}  onMouseLeave={this.hideCircleClass} onClick={closeModal}>
        <img src={x} alt="x" className="icon"/>
        <svg className="circle-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
          <circle className="path circle" fill="none" cx="65.1" cy="65.1" r="62.1"/>
        </svg>
      </span>
    );
  }
}

export default CloseModalButton;

CloseModalButton.proptypes = {
  closeModal: PropTypes.func.isRequired
};