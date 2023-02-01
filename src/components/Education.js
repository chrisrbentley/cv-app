import React from 'react';
import '../styles/form.css';

const Education = (props) => {
  return (
    <fieldset className='education'>
      <legend>Education</legend>
      <input
        type='text'
        name='school'
        className='school input'
        placeholder='School'
        onChange={props.handleChange}
      />
      <input
        type='text'
        name='degree'
        className='degree input'
        placeholder='Degree'
        onChange={props.handleChange}
      />
      <input
        type='text'
        name='schoolStartDate'
        className='school-start-date input'
        placeholder='Start Date'
        onChange={props.handleChange}
      />
      <input
        type='text'
        name='schoolEndDate'
        className='school-end-date input'
        placeholder='End Date'
        onChange={props.handleChange}
      />
    </fieldset>
  );
};

export default Education;
