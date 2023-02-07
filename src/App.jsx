import React from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import './styles/form.css';
import { useForm, useGenerator } from './customHooks';

function App() {
  const { inputs, handleInputChange } = useForm();
  const {
    workInputs,
    addWorkInputs,
    removeWorkInputs,
    handleWorkChange,
    educationInputs,
    addEducationInputs,
    removeEducationInputs,
    handleEducationChange,
  } = useGenerator();

  return (
    <div id="container">
      <div id="wrapper">
        <Form
          inputs={inputs}
          handleInputChange={handleInputChange}
          workInputs={workInputs}
          addWorkInputs={addWorkInputs}
          removeWorkInputs={removeWorkInputs}
          handleWorkChange={handleWorkChange}
          educationInputs={educationInputs}
          addEducationInputs={addEducationInputs}
          removeEducationInputs={removeEducationInputs}
          handleEducationChange={handleEducationChange}
        />
      </div>
      <Resume
        inputs={inputs}
        workInputs={workInputs}
        educationInputs={educationInputs}
      />
    </div>
  );
}

export default App;
