import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CloseModalButton from '../Modal/CloseModalButton';

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
      name
    } = this.props;
    return (
      <div id="modal">
        <div id="modal-body" className={`animated fadeInUp ${closing ? 'fadeOutDown' : ''}`}>
          <div className="modal-header">
            <h2 className="modal-name">{name}</h2>
            <CloseModalButton closeModal={this.closeModal} />
          </div>
          <div className={`modal-content`}>
          test
            <div id="mc_embed_signup">
              <form action="https://diazre.us19.list-manage.com/subscribe/post?u=3344b9f1941a28dcd26265a07&amp;id=acdfdaf584" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                  <div className="mc-field-group">
                    <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                    <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input type="text" value="" name="LNAME" className="" id="mce-LNAME" />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style="display:none"></div>
                    <div className="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_3344b9f1941a28dcd26265a07_acdfdaf584" tabindex="-1" value="" />
                  </div>
                  <div className="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.proptypes = {
  name: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};
