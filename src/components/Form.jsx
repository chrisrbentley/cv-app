import React from 'react';
import General from './General';
import Education from './Education';
import Work from './Work';
import '../styles/form.css';

function Form(props) {
  const {
    handleInputChange,
    workInputs,
    addWorkInputs,
    handleWorkChange,
    removeWorkInputs,
    educationInputs,
    addEducationInputs,
    removeEducationInputs,
    handleEducationChange,
  } = props;

  return (
    <form>
      <General handleInputChange={handleInputChange} />
      <Work
        workInputs={workInputs}
        addWorkInputs={addWorkInputs}
        handleWorkChange={handleWorkChange}
        removeWorkInputs={removeWorkInputs}
      />
      <Education
        educationInputs={educationInputs}
        addEducationInputs={addEducationInputs}
        removeEducationInputs={removeEducationInputs}
        handleEducationChange={handleEducationChange}
      />
    </form>
  );
}

export default Form;
