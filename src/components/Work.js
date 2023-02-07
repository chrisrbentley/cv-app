import React from 'react';
import '../styles/form.css';

const Work = (props) => {
  const {
    handleInputChange,
    workInputs,
    addWorkInputs,
    handleWorkChange,
    removeWorkInputs,
  } = props;

  return (
    <fieldset className='work-experience'>
      <legend>Work Experience</legend>

      <div className='experiences'>
        {workInputs.map((field, index) => {
          return (
            <div className='experience' key={index}>
              <p>Experience {workInputs.length}</p>
              <input
                type='text'
                name='company'
                placeholder='Company'
                onChange={(e) => handleWorkChange(index, e)}
              />
              <input
                type='text'
                name='title'
                placeholder='Title'
                onChange={(e) => handleWorkChange(index, e)}
              />
              <input
                type='text'
                name='workStartDate'
                placeholder='Start Date'
                onChange={(e) => handleWorkChange(index, e)}
              />
              <input
                type='text'
                name='workEndDate'
                placeholder='End Date'
                onChange={(e) => handleWorkChange(index, e)}
              />
              <input
                type='text'
                name='jobDescription'
                placeholder='Description'
                onChange={(e) => handleWorkChange(index, e)}
              />
            </div>
          );
        })}
      </div>
      <button onClick={addWorkInputs} type='button'>
        Add Experience
      </button>
      {workInputs.length > 0 ? (
        <button onClick={removeWorkInputs} type='button'>
          Remove Experience
        </button>
      ) : null}
    </fieldset>
  );
};

export default Work;
