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

  const [educationInputs, setEducationInputs] = useState([
    {
      school: '',
      degree: '',
      schoolStartDate: '',
      schoolEndDate: '',
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

  const addEducationInputs = () => {
    setEducationInputs([
      ...educationInputs,
      {
        school: '',
        degree: '',
        schoolStartDate: '',
        schoolEndDate: '',
      },
    ]);
  };

  const removeWorkInputs = (index) => {
    const field = [...workInputs];
    field.splice(index, 1);
    setWorkInputs(field);
  };

  const removeEducationInputs = (index) => {
    const field = [...educationInputs];
    field.splice(index, 1);
    setEducationInputs(field);
  };

  const handleWorkChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...workInputs];
    list[index][name] = value;
    setWorkInputs(list);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...educationInputs];
    list[index][name] = value;
    setEducationInputs(list);
    console.log(educationInputs);
  };

  return {
    workInputs,
    addWorkInputs,
    removeWorkInputs,
    handleWorkChange,
    educationInputs,
    addEducationInputs,
    removeEducationInputs,
    handleEducationChange,
  };
};

export { useForm, useGenerator };
