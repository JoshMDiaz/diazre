import React, { Component } from 'react'

let close, top, messageClosing;

class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      closing: false
    }
  }

  componentDidMount() {
    this.findLocation();   
  }
  
  componentWillUnmount() {
    this.isCancelled = true;
    clearTimeout(close);
    clearTimeout(top);
    clearTimeout(messageClosing);
  }

  scrollTop() {
    window.scrollTo(0, 0)
  }
  
  findLocation = () => {
    top = setTimeout(() => {
      this.scrollTop()
    }, 10);
    if (window.location.search.includes('success')) {
      !this.isCancelled && this.setState({
        show: true
      }, () => {
        messageClosing = setTimeout(() => {
          !this.isCancelled && this.setState({
            closing: true
          }, () => {
            close = setTimeout(() => {
              !this.isCancelled && this.setState({ show: false });
            }, 1000);
          });
        }, 3000);
      });
    }
  }

  render() {
    const { show, closing } = this.state;
    return (
      <div className={`thanks-wrapper ${show ? 'show slideInDown' : 'hide'} animated ${closing ? 'slideOutUp' : ''}`}>
        <span>Thanks for reaching out!<br />We will get back to you in 1 - 2 business days.</span>
      </div>
    );
  }
}
 
export default Thanks;