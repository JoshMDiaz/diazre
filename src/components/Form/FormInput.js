import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: this.props.formObj.focused,
      validated: this.props.formObj.validated,
      value: ''
    };
  }

  setClass = () => {
    const { focused, value, validated } = this.state;
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

  addFocus = () => {
    this.setState({ focused: true });
  }

  removeFocus = () => {
    this.setState({ focused: false });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.formObj.inputType === 'email') {
      this.emailValidation(e.target.value);
    }
    if (this.props.formObj.inputType === 'phone') {
      this.phoneValidation(e.target.value);
    }
    if(this.props.formObj.inputType === 'text') {
      let empty;
      if(e.target.value !== '' || null) {
        empty = true;
      }
      else {
        empty = false;
      }
      this.props.cb(this.validDTO(empty, e.target.value));
    }
  }

  validDTO(valid, value) {
    return {
      name: this.props.formObj.inputName,
      validated: valid,
      value: value
    };
  }

  emailValidation(email) {
    let re = /\S+@\S+\.\S+/,
        validated = false;
    if (re.test(email) !== false) {
      validated = true;
    }
    this.props.cb(this.validDTO(validated, email));
    this.setState({ validated: validated });
  }

  phoneValidation(phone) {
    let newPhone = phone.replace(/[. ,:-]+/g, ''),
        phoneVal = /^[0-9]{10,11}$/,
        validated = false;
    if (phoneVal.test(newPhone) === false) {
      this.props.cb(this.validDTO(validated, phone));
      this.setState({ validated: false });
    } else {
      validated = true;
      this.props.cb(this.validDTO(validated, phone));
      this.setState({ validated: true });
    }
  }

  isEmpty() {
    return this.state.value === undefined || this.state.value === '';
  }

  render() {
    const { elementId, formObj } = this.props,
          { value, validated, focused } = this.state;
    return (
      <div className="form-element" id={`${elementId ? elementId : ''}`}>
        <label 
          className={this.setClass()}
          htmlFor={formObj.name}
        >
          {formObj.label} {!validated && (focused || !this.isEmpty()) ? `doesn't work` : ''}
        </label>
        <input
          className={this.setClass()}
          type={formObj.type}
          value={value}
          name={formObj.inputName}
          onFocus={this.addFocus}
          onBlur={this.removeFocus}
          onChange={this.handleChange}
          autoComplete={formObj.autoComplete}
          placeholder={formObj.placeholder}
          required
        />
      </div>
    );
  }
}

export default FormInput