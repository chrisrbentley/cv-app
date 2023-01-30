import React, { useState } from 'react';

const useForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));

    console.log(inputs);
  };

  return {
    handleInputChange,
    inputs,
  };
};

export default useForm;
