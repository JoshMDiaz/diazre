import React, { Component } from 'react';
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
            <div className={`home-picture`} style={{
              background: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%'
            }}></div>
          </Slide>
          <Slide right={num % 2 ? false : true} left={num % 2 ? true : false} >
            <div className={`home-info`}>
              <h3>{name}</h3>
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
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.element.isRequired,
  num: PropTypes.number.isRequired,
  tour: PropTypes.element.isRequired
};