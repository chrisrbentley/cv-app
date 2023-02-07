import React from 'react';
import '../styles/form.css';

const Education = (props) => {
  const {
    educationInputs,
    addEducationInputs,
    removeEducationInputs,
    handleEducationChange,
  } = props;

  return (
    <fieldset className='education'>
      <legend>Education</legend>

      {educationInputs.map((field, index) => {
        return (
          <div className='school-inputs' key={index}>
            <input
              type='text'
              name='school'
              className='school input'
              placeholder='School'
              onChange={(e) => handleEducationChange(index, e)}
            />
            <input
              type='text'
              name='degree'
              className='degree input'
              placeholder='Degree'
              onChange={(e) => handleEducationChange(index, e)}
            />
            <input
              type='text'
              name='schoolStartDate'
              className='school-start-date input'
              placeholder='Start Date'
              onChange={(e) => handleEducationChange(index, e)}
            />
            <input
              type='text'
              name='schoolEndDate'
              className='school-end-date input'
              placeholder='End Date'
              onChange={(e) => handleEducationChange(index, e)}
            />
          </div>
        );
      })}

      <button type='button' onClick={addEducationInputs}>
        Add School
      </button>
      {educationInputs.length > 0 ? (
        <button onClick={removeEducationInputs} type='button'>
          Remove School
        </button>
      ) : null}
    </fieldset>
  );
};

export default Education;
