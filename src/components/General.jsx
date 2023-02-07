import React from 'react';
import '../styles/form.css';

function General(props) {
  const { handleInputChange } = props;

  return (
    <fieldset id="general-info">
      <legend>General Information</legend>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="currentTitle"
        id="currentTitle"
        placeholder="Title"
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        id="lastName"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Location"
        onChange={handleInputChange}
      />

      <textarea
        name="description"
        id="description"
        cols="30"
        rows="5"
        placeholder="Description"
        onChange={handleInputChange}
      />
    </fieldset>
  );
}

export default General;
