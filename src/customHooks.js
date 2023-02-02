import React, { useState } from 'react';

const useForm = () => {
  const [inputs, setInputs] = useState({});

  /* const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    // callback();
  }; */

  const handleInputChange = (e) => {
    // e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));

    console.log(inputs);
  };

  return {
    // handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useForm;
