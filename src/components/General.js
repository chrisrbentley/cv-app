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
        onChange={props.handleChange}
      />
      <input
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Last Name'
        onChange={props.handleChange}
      />
      <input
        type='text'
        name='currentTitle'
        id='currentTitle'
        placeholder='Title'
        onChange={props.handleChange}
      />
      <input
        type='email'
        name='email'
        id='lastName'
        placeholder='Email'
        onChange={props.handleChange}
      />
      <input
        type='tel'
        name='phoneNumber'
        id='phoneNumber'
        placeholder='Phone Number'
        onChange={props.handleChange}
      />
      <input
        type='text'
        name='location'
        id='location'
        placeholder='Location'
        onChange={props.handleChange}
      />

      <textarea
        name='description'
        id='description'
        cols='30'
        rows='5'
        placeholder='Description'
        onChange={props.handleChange}
      ></textarea>
    </fieldset>
  );
};

export default General;
