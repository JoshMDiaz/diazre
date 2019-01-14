import React, { Component } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Form from './Form'
import { ToastContainer, toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class ModalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  openModal = () => {
    this.setState({
      modalOpen: true
    });
  }

  closeModal = (showMessage) => {
    this.setState({ modalOpen: false });
    if (showMessage) {
      toast.success("Message sent!")
    }
  }

  render() { 
    const { modalOpen } = this.state;
    return (
      <div className="modal-button">
        <ToastContainer transition={Slide} />
        <Button text="Get a Quote" light={this.props.light} onClick={this.openModal} />
        { modalOpen && <Modal close={this.closeModal} content={<Form close={this.closeModal} />} title="Get a Quote" darkIcon form /> }
      </div>
    );
  }
}
 
export default ModalButton