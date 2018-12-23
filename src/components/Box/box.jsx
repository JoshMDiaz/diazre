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
    const { image, name, num } = this.props,
          { modalOpen } = this.state;
    return (
      <div>
        <div className={`box ${num % 2 ? 'even' : 'odd'}`} onClick={() => this.toggleModal(true)}>
          <Slide up>
            <div className={`home-picture`}>
              <img src={image} alt={name}/>
              <div className="overlay"></div>
              <h3>View</h3>
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
  num: PropTypes.number.isRequired,
  tour: PropTypes.element.isRequired
};