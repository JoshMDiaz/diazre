import React, { Component } from 'react'
import BoxTitleLetter from './BoxTitleLetter';

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
      <div className="name box-title">
        { textArr.map((e, i) => (
          <BoxTitleLetter letter={e} num={i} key={i} />
        ))}
      </div>
    );
  }
}
 
export default BoxTitle;