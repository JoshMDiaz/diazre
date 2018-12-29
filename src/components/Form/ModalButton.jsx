import React, { Component } from 'react'
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Form from './Form';

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render() { 
    const { modalOpen } = this.state;
    return (
      <div className="modal-button">
        <Button text="Get a Quote" light={this.props.light} onClick={this.openModal} />
        { modalOpen && <Modal close={this.closeModal} content={<Form />} title="Get a Quote" darkIcon /> }
      </div>
    );
  }
}
 
export default ModalButton