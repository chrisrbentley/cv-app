import React, { Component } from 'react';
import '../styles/form.css';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false,
    };
  }

  render() {
    const { handleChange } = this.props;

    return (
      <fieldset id='general-info'>
        <input
          type='text'
          name='firstName'
          id='firstName'
          className='input'
          placeholder='First Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastName'
          id='lastName'
          className='input'
          placeholder='Last Name'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          id='lastName'
          className='input'
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          type='tel'
          name='phoneNumber'
          id='phoneNumber'
          className='input'
          placeholder='Phone Number'
          onChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default General;
