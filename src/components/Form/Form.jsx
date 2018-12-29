import React, { Component } from 'react'
import FormTextarea from './FormTextarea'
import FormInput from './FormInput'
import Button from '../Button/Button';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {
        valid: false,
        value: ''
      },
      email: {
        valid: false,
        value: ''
      },
      completedForm: false,
      enableSubmit: false
    }

    this.formInputs = [
      {
        inputName: 'first_name',
        inputType: 'text',
        label: 'Your Name',
        autoComplete: '',
        focused: false,
        validated: true
      },
      {
        inputName: 'email',
        inputType: 'email',
        label: 'Email Address',
        autoComplete: 'email',
        focused: false,
        validated: true
      }
    ];

    this.formTextarea = {
      label: 'Message',
      focused: false,
      name: 'description'
    };
  }

  checkValidity = (check) => {
    let field = check.name;
    this.setState(() => {
      return {
        [field]: {
          valid: check.validated,
          value: check.value
        }
      };
    });
  }

  render() {
    const { enableSubmit } = this.state;
    return (
      <form name="contact" method="POST" data-netlify="true">
        {this.formInputs.map((e, i) => {
          return <FormInput formObj={e} key={i} cb={this.checkValidity} />
        })}
        <FormTextarea formObj={this.formTextarea} cb={this.checkValidity} />
        {/* <div className="form-element">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-element">
          <label>Email</label>
          <input type="text" name="email" />
        </div> */}
        {/* <div className="form-textarea">
          <label>Message</label>
          <textarea name="message" />
        </div> */}
        <div data-netlify-recaptcha="true" />
        <Button text="Send" type="submit" disabled={!enableSubmit} />
      </form>
    )
  }
}

export default Form
