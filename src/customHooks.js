import React, { useState } from 'react';

const useForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  return {
    handleInputChange,
    inputs,
  };
};

const useGenerator = () => {
  const [workInputs, setWorkInputs] = useState([
    {
      company: '',
      title: '',
      workStartDate: '',
      workEndDate: '',
      jobDescription: '',
    },
  ]);

  const addWorkInputs = () => {
    setWorkInputs([
      ...workInputs,
      {
        company: '',
        title: '',
        workStartDate: '',
        workEndDate: '',
        jobDescription: '',
      },
    ]);
  };

  const removeWorkInputs = (index) => {
    const field = [...workInputs];
    field.splice(index, 1);
    setWorkInputs(field);
  };

  const handleWorkChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...workInputs];
    list[index][name] = value;
    setWorkInputs(list);
  };

  return {
    workInputs,
    addWorkInputs,
    handleWorkChange,
    removeWorkInputs,
  };
};

export { useForm, useGenerator };
