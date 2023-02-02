import React from 'react';
import '../styles/form.css';

const Work = (props) => {
  const { handleInputChange } = props;

  return (
    <fieldset className='work-experience'>
      <legend>Work Experience</legend>
      <input
        type='text'
        name='company'
        className='company'
        placeholder='Company'
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='title'
        className='title'
        placeholder='Title'
        onChange={handleInputChange}
      />

      <input
        type='text'
        name='workStartDate'
        className='workStartDate'
        placeholder='Start Date'
        onChange={handleInputChange}
      />

      <input
        type='text'
        name='workEndDate'
        className='workEndDate'
        placeholder='End Date'
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='jobDescription'
        className='job-description'
        placeholder='Job Description'
        onChange={handleInputChange}
      />
    </fieldset>
  );
};

export default Work;
