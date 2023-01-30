import React from 'react';
import '../styles/form.css';

const General = (props) => {
  return (
    <fieldset id='general-info'>
      <legend>General Information</legend>
      <input
        type='text'
        name='firstName'
        id='firstName'
        placeholder='First Name'
        onChange={props.handleInputChange}
      />
      <input
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Last Name'
        onChange={props.handleInputChange}
      />
      <input
        type='text'
        name='currentTitle'
        id='currentTitle'
        placeholder='Title'
        onChange={props.handleInputChange}
      />
      <input
        type='email'
        name='email'
        id='lastName'
        placeholder='Email'
        onChange={props.handleInputChange}
      />
      <input
        type='tel'
        name='phoneNumber'
        id='phoneNumber'
        placeholder='Phone Number'
        onChange={props.handleInputChange}
      />
      <input
        type='text'
        name='location'
        id='location'
        placeholder='Location'
        onChange={props.handleInputChange}
      />

      <textarea
        name='description'
        id='description'
        cols='30'
        rows='5'
        placeholder='Description'
        onChange={props.handleInputChange}
      ></textarea>
    </fieldset>
  );
};

export default General;
