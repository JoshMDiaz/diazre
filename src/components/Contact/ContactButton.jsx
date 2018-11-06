import React, { Component } from 'react'
import ContactModal from './ContactModal'
import {
  DialogOverlay,
  DialogContent
} from "@reach/dialog"

class ContactButton extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false }
  }

  toggleModal = (open) => {
    this.setState({ modalOpen: open });
  }

  render() { 
    const { modalOpen } = this.state;
    return (
      <div className="contact-button">
        <button onClick={() => this.toggleModal(true)}>Contact Us</button>
        <DialogOverlay isOpen={modalOpen}>
          <DialogContent>
            <ContactModal close={() => this.toggleModal(false)} />
          </DialogContent>
        </DialogOverlay>
      </div>
    );
  }
}
 
export default ContactButton;