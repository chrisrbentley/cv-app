import React, { Component } from 'react';
import '../styles/form.css';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange } = this.props;

    return (
      <fieldset id='general-info'>
        <legend>General Information</legend>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='First Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='currentTitle'
          id='currentTitle'
          placeholder='Title'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          id='lastName'
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          type='tel'
          name='phoneNumber'
          id='phoneNumber'
          placeholder='Phone Number'
          onChange={handleChange}
        />
        <input
          type='text'
          name='location'
          id='location'
          placeholder='Location'
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default General;
