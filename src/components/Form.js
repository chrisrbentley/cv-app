import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import '../styles/form.css';

const Form = (props) => {
  return (
    <form>
      <General handleChange={props.handleChange} />
      <Education handleChange={props.handleChange} />
      <Work handleChange={props.handleChange} />
    </form>
  );
};

export default Form;
