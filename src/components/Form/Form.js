import React, { Component } from 'react';
import GoogleButton from '../GoogleButton/GoogleButton';
import Button from '../Button/Button';

import FormField from '../FormField/FormField';
import styles from './Form.module.scss';

class Form extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = this.state;
    // validation
    // send form data to backend
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  renderFormFields() {
    const fields = [
      {
        id: 0,
        type: 'text',
        label: 'Full Name',
        name: 'fullName',
        value: this.state.fullName,
      },
      {
        id: 1,
        type: 'text',
        label: 'E-mail',
        name: 'email',
        value: this.state.email,
      },
      {
        id: 2,
        type: 'password',
        label: 'Password',
        name: 'password',
        value: this.state.password,
      },
    ];

    return fields.map((field) => {
      return (
        <FormField
          key={field.id}
          field={field}
          handleChange={this.handleChange}
        />
      );
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        {this.renderFormFields()}
        <Button type="submit">Register</Button>
        <GoogleButton />
      </form>
    );
  }
}

export default Form;
