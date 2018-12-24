import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slide from 'react-reveal/Slide'
import Modal from '../Modal/Modal'
import {
  DialogOverlay,
  DialogContent
} from "@reach/dialog"
import BoxTitle from './BoxTitle';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      animateText: false
    }
  }

  toggleModal = (opened) => {
    this.setState({ modalOpen: opened });
  }

  toggleAnimate = (animate) => {
    this.setState({ animateText: animate });
  }

  render() { 
    const { image, name } = this.props,
          { modalOpen, animateText } = this.state;
    return (
      <div>
        <div className={`box`} onClick={() => this.toggleModal(true)} onMouseEnter={() => this.toggleAnimate(true)} onMouseLeave={() => this.toggleAnimate(false)}>
          <Slide up>
            <div className={`home-picture`}>
              <img src={image} alt={name}/>
              <div className="overlay"></div>
              <div className="home-info">
                { animateText ? (
                  <BoxTitle animate={animateText} text={name} />
                ) : (
                  <span className="name">{name}</span>
                ) }
                <span className="view">
                  <span className="line before-line"></span>
                  View
                  <span className="line after-line"></span>
                </span>
              </div>
            </div>
          </Slide>
        </div>
        <DialogOverlay isOpen={modalOpen}>
          <DialogContent>
            <Modal close={() => this.toggleModal(false)} {...this.props} />
          </DialogContent>
        </DialogOverlay>
      </div>
    );
  }
}
 
export default Box;

Box.proptypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.element.isRequired,
  tour: PropTypes.element.isRequired
};