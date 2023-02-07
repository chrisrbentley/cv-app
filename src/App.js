import React, { useState } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import './styles/form.css';
import { useForm, useGenerator } from './customHooks';

const App = () => {
  const { inputs, handleInputChange } = useForm();
  const { workInputs, addWorkInputs, handleWorkChange, removeWorkInputs } =
    useGenerator();

  return (
    <div id='container'>
      <div id='wrapper'>
        <Form
          inputs={inputs}
          handleInputChange={handleInputChange}
          workInputs={workInputs}
          addWorkInputs={addWorkInputs}
          handleWorkChange={handleWorkChange}
          removeWorkInputs={removeWorkInputs}
        />
      </div>
      <Resume inputs={inputs} workInputs={workInputs} />
    </div>
  );
};

export default App;
