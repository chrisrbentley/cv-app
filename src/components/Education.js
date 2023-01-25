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
        {/* <legend>Education</legend> */}
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
          name='dateAttended'
          className='date input'
          placeholder='Date Attended (MM/YYYY - MM/YYYY)'
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default Education;
