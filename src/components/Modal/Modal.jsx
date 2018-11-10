import React, { Component } from 'react'
import CloseModalButton from './CloseModalButton'
import PropTypes from 'prop-types'
import infoBubble from '../../images/info.svg'
import Tooltip from '../Tooltip/Tooltip'

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
      tour,
      name
    } = this.props;
    return (
      <div id="modal">
        <div id="modal-body" className={`animated fadeInUp ${closing ? 'fadeOutDown' : ''}`}>
          <div className="modal-header">
            <h2 className="modal-name">
              {name}
              <Tooltip tooltipContent={<span>Click on the full screen icon below to make the tour full screen.</span>} position="right" id={'vr-tooltip'}>
                <img src={infoBubble} alt="info bubble" className="info-bubble" />
              </Tooltip>
            </h2>
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
  name: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};
