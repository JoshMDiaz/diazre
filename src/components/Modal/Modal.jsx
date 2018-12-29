import React, { Component } from 'react'
import CloseModalButton from './CloseModalButton'
import PropTypes from 'prop-types'

let close;

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      closing: false
    }
  }
  
  componentWillUnmount() {
    this.isCancelled = true;
    clearTimeout(close);
  }

  closeModal = () => {
    !this.isCancelled && this.setState({
      closing: true
    }, () => {
      close = setTimeout(() => {
        this.props.close()
      }, 1500)
    })
  }

  render() {
    const {
      closing
    } = this.state,
    {
      content,
      darkIcon,
      title,
      form
    } = this.props
    return (
      <div id="modal" className={`animated fadeIn ${closing ? 'fadeOut' : ''}`}>
        <div id="modal-body" className={`animated fadeInUp ${closing ? 'fadeOutDown' : ''} ${form ? 'form-modal' : ''}`}>
          <div className="modal-header">
            <span className="modal-title">{title}</span>
            <CloseModalButton closeModal={this.closeModal} darkIcon={darkIcon} />
          </div>
          <div className={`modal-content`}>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal

Modal.proptypes = {
  content: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
  darkIcon: PropTypes.bool,
  form: PropTypes.bool,
  title: PropTypes.string
}
