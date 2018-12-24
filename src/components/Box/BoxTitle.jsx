import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class BoxTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      textArr: []
    }
  }

  componentDidMount() {
    this.animateText(this.props.text);
  }

  animateText = (text) => {
    let newText = text.split('');
    this.setState({ textArr: newText });
  }

  render() { 
    const { textArr } = this.state;
    return (
      <div className="name">
        { textArr.map((e, i) => (
          <Fade delay={`${i * 8}0`} duration={500} key={i}>
            <span>{e}</span>
          </Fade>
        ))}
      </div>
    );
  }
}
 
export default BoxTitle;