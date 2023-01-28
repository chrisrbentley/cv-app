import React, { Component } from 'react';
import '../styles/form.css';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange } = this.props;

    return (
      <fieldset className='education'>
        <legend>Education</legend>
        <input
          type='text'
          name='school'
          className='school input'
          placeholder='School'
          onChange={handleChange}
        />
        <input
          type='text'
          name='degree'
          className='degree input'
          placeholder='Degree'
          onChange={handleChange}
        />
        <input
          type='text'
          name='schoolStartDate'
          className='school-start-date input'
          placeholder='Start Date'
          onChange={handleChange}
        />
        <input
          type='text'
          name='schoolEndDate'
          className='school-end-date input'
          placeholder='End Date'
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default Education;
