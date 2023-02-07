import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import '../styles/form.css';

const Form = (props) => {
  const { workInputs, addWorkInputs, handleWorkChange, removeWorkInputs } =
    props;

  return (
    <form>
      <General handleInputChange={props.handleInputChange} />
      <Work
        handleInputChange={props.handleInputChange}
        workInputs={workInputs}
        addWorkInputs={addWorkInputs}
        handleWorkChange={handleWorkChange}
        removeWorkInputs={removeWorkInputs}
      />
      <Education handleInputChange={props.handleInputChange} />
    </form>
  );
};

export default Form;
