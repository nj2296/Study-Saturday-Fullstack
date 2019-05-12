import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" />
        <input type="text" name="lastName" />
        <input type="text" name="email" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
