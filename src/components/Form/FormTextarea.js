import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: this.props.formObj.focused,
      value: ''
    };
  }

  addClass = () => {
    this.setState({ focused: true });
  }

  removeFocus = () => {
    this.setState({ focused: false });
  }

  setClass = () => {
    const { focused, validated, value } = this.state;
    let newClass = [];
    if (focused) {
      newClass.push('focused');
    }
    if (focused || !this.isEmpty()) {
      newClass.push('small')
    }
    if (validated === false) {
      newClass.push('invalid');
    }
    if(!focused && value === '') {
      newClass = [];
    }
    return newClass.join(' ');
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.cb(this.validDTO(e.target.value));
  }

  validDTO(value) {
    return {
      name: this.props.formObj.name,
      value: value
    };
  }

  isEmpty() {
    return this.state.value === undefined || this.state.value === '';
  }

  render() {
    const { formObj } = this.props,
          { value } = this.state;
    return (
      <div className="form-textarea">
        <label className={this.setClass()}>
          {formObj.label}
        </label>
        <textarea
          value={value}
          onFocus={this.addClass}
          onBlur={this.removeFocus}
          onChange={this.handleChange}
          name={formObj.name}
        />
      </div>
    );
  }
}

export default FormInput
