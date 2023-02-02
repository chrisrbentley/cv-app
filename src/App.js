import React, { useState } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import './styles/form.css';
import useForm from './customHooks';

const App = () => {
  const { inputs, handleInputChange } = useForm();

  const [showResume, setShowResume] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    showResume ? setShowResume(false) : setShowResume(true);
  };

  return (
    <div id='container'>
      <div id='wrapper'>
        <Form
          onFormSubmit={onFormSubmit}
          inputs={inputs}
          handleInputChange={handleInputChange}
        />
      </div>
      <Resume inputs={inputs} />
    </div>
  );
};

export default App;
