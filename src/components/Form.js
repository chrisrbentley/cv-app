import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import '../styles/form.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onFormSubmit } = this.props;
    const { handleChange } = this.props;

    return (
      <form action='' onSubmit={onFormSubmit} id='form'>
        <h3>General Information</h3>
        <General handleChange={handleChange} />
        <h3>Education</h3>
        <Education handleChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;
