import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onFormSubmit, handleChange } = this.props;

    return (
      <div>
        <form action='post' onSubmit={onFormSubmit}>
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

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default General;
