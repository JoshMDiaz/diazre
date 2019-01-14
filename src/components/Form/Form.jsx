import React, { Component } from 'react'
import FormTextarea from './FormTextarea'
import FormInput from './FormInput'
import Button from '../Button/Button'
import addToMailchimp from 'gatsby-plugin-mailchimp'

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
      name: 'message'
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

  handleSubmit = (e) => {
    e.preventDefault();
    let listFields = {
      NAME: this.state.name.value,
      EMAIL: this.state.email.value,
      MESSAGE: this.state.message.value
    }
    addToMailchimp('iknowtennispro@gmail.com', listFields).then(data => {
      this.props.close(true);
    })
  }

  render() {
    const { enableSubmit } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
