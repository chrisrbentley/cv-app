import React, { Component } from 'react';
import '../styles/form.css';

class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange } = this.props;

    return (
      <fieldset className='work-experience'>
        <legend>Work Experience</legend>
        <input
          type='text'
          name='company'
          className='company'
          placeholder='Company'
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          className='title'
          placeholder='Title'
          onChange={handleChange}
        />

        <input
          type='text'
          name='workStartDate'
          className='workStartDate'
          placeholder='Start Date'
          onChange={handleChange}
        />

        <input
          type='text'
          name='workEndDate'
          className='workEndDate'
          placeholder='End Date'
          onChange={handleChange}
        />
        <input
          type='text'
          name='jobDescription'
          className='job-description'
          placeholder='Job Description'
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default Work;
