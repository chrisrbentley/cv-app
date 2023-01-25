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
          className='work-start-date'
          placeholder='Start Date'
          onChange={handleChange}
        />
        <input
          type='text'
          name='workEndDate'
          className='work-end-date'
          placeholder='End Date'
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default Work;
