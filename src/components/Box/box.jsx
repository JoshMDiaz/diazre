import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slide from 'react-reveal/Slide'
import Modal from '../Modal/Modal'
import {
  DialogOverlay,
  DialogContent
} from "@reach/dialog"

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  toggleModal = (opened) => {
    this.setState({ modalOpen: opened });
  }

  render() { 
    const { image, name } = this.props,
          { modalOpen } = this.state;
    return (
      <div>
        <div className={`box`} onClick={() => this.toggleModal(true)}>
          <Slide up>
            <div className={`home-picture`}>
              <img src={image} alt={name}/>
              <div className="overlay"></div>
              <div className="home-info">
                <span className="name">{name}</span>
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