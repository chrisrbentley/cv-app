/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import '../styles/form.css';

function Work(props) {
  const { workInputs, addWorkInputs, handleWorkChange, removeWorkInputs } =
    props;

  return (
    <fieldset className="work-experience">
      <legend>Work Experience</legend>

      <div className="experiences">
        {workInputs.map((field, index) => (
          <div className="experience" key={index}>
            <input
              type="text"
              name="company"
              placeholder="Company"
              onChange={(e) => handleWorkChange(index, e)}
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => handleWorkChange(index, e)}
            />
            <input
              type="text"
              name="workStartDate"
              placeholder="Start Date"
              onChange={(e) => handleWorkChange(index, e)}
            />
            <input
              type="text"
              name="workEndDate"
              placeholder="End Date"
              onChange={(e) => handleWorkChange(index, e)}
            />
            <input
              type="text"
              name="jobDescription"
              placeholder="Description"
              onChange={(e) => handleWorkChange(index, e)}
            />
          </div>
        ))}
      </div>
      <button onClick={addWorkInputs} type="button">
        Add Experience
      </button>
      {workInputs.length > 0 ? (
        <button onClick={removeWorkInputs} type="button">
          Remove Experience
        </button>
      ) : null}
    </fieldset>
  );
}

export default Work;
