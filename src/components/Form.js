import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import '../styles/form.css';

const Form = (props) => {
  return (
    <form>
      <General handleInputChange={props.handleInputChange} />
      <Education handleInputChange={props.handleInputChange} />
      <Work handleInputChange={props.handleInputChange} />
      <input type='submit' />
    </form>
  );
};

export default Form;
