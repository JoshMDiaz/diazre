import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class BoxTitleLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeToWhite: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ changeToWhite: true });
    }, 500);
  }

  render() { 
    const { letter, num } = this.props,
          { changeToWhite } = this.state;
    return (
      <Fade delay={num * 10} duration={1000}>
        <span className={`box-title-letter ${changeToWhite ? 'white' : ''}`}>{letter}</span>
      </Fade>
    );
  }
}
 
export default BoxTitleLetter;