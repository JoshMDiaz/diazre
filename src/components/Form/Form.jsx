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
      enableSubmit: false,
      count: 0
    }

    this.formInputs = [
      {
        inputName: 'name',
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

  componentDidUpdate() {
    const { name, email, count } = this.state;
    if (count === 0 && name.value !== '' && email.value !== '' && email.valid) {
      this.setState({
        count: 1,
        enableSubmit: true
      });
    } else if (count === 1 && !email.valid) {
      this.setState({
        count: 0,
        enableSubmit: false
      });
    }
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
      <form name="contact" method="POST" action="?success" data-netlify="true">
        {this.formInputs.map((e, i) => {
          return <FormInput formObj={e} key={i} cb={this.checkValidity} />
        })}
        <FormTextarea formObj={this.formTextarea} cb={this.checkValidity} />
        <div data-netlify-recaptcha="true" />
        <Button text="Send" type="submit" disabled={!enableSubmit} />
      </form>
    )
  }
}

export default Form
