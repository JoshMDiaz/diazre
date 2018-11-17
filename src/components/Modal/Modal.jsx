import React, { Component } from 'react'
import CloseModalButton from './CloseModalButton'
import PropTypes from 'prop-types'

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closing: false
    }
  }

  closeModal = () => {
    this.setState({
      closing: true
    }, () => {
      setTimeout(() => {
        this.props.close();
      }, 1500);
    });
  }

  render() {
    const {
      closing
    } = this.state,
    {
      tour
    } = this.props;
    return (
      <div id="modal">
        <div id="modal-body" className={`animated fadeInUp ${closing ? 'fadeOutDown' : ''}`}>
          <div className="modal-header">
            <CloseModalButton closeModal={this.closeModal} />
          </div>
          <div className={`modal-content`}>
            {tour}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.proptypes = {
  tour: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired
};
