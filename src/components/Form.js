import React, { Component } from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
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
        <General handleChange={handleChange} />
        <Education handleChange={handleChange} />
        <Work handleChange={handleChange} />
      </form>
    );
  }
}

export default Form;
