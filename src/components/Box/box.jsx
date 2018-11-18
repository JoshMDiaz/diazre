import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slide from 'react-reveal/Slide'
import Modal from '../Modal/Modal'
import {
  DialogOverlay,
  DialogContent
} from "@reach/dialog"

const fillerColors = [
  '#b8d4e2',
  '#51a8d0',
  '#5b7784',
  '#deeef6'
]

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

  randomColor = () => {
    for (let i = fillerColors.length - 1; i >= 0; i--) {
      let randomIndex = Math.floor(Math.random()*(i+1)),
          itemAtIndex = fillerColors[randomIndex]; 
      fillerColors[randomIndex] = fillerColors[i]; 
      fillerColors[i] = itemAtIndex;
    }
    return fillerColors;
  }

  render() { 
    const { image, name, num } = this.props,
          { modalOpen } = this.state;
    let fillerBgs = this.randomColor();
    return (
      <div>
        <div className={`box ${num % 2 ? 'even' : 'odd'}`} onClick={() => this.toggleModal(true)}>
          <Slide up>
            <div className={`home-picture`} style={{
              backgroundImage: `linear-gradient(0deg, rgba(4, 21, 51, 0.4), rgba(4, 21, 51, 0.5)), url(${image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}>
              <div className={`home-info`}>
                <h3>{name}</h3>
              </div>
            </div>
          </Slide>
          <div className="fillers">
            { Array.apply(1, {length: 4}).map((f, j) => (
              <Slide left={j === 2 || j === 0} right={j === 1 || j === 3}>
                <div className={`filler`} key={j} style={{ background: fillerBgs[j] }}></div>
              </Slide>
            ))}
          </div>
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