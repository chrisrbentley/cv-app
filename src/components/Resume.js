import React from 'react';
import '../styles/resume.css';

const Resume = (props) => {
  const { inputs, workInputs } = props;

  return (
    <div id='resume'>
      <div id='resume-top'>
        <div id='name-title'>
          <h1 id='name'>
            {inputs.firstName} {inputs.lastName}
          </h1>
          <h3>{inputs.currentTitle}</h3>
        </div>
        <div id='contact-info'>
          <p>{inputs.phoneNumber}</p>
          <p id='email'>{inputs.email}</p>
          <p>{inputs.location}</p>
        </div>
      </div>
      <hr />
      <div className='self-description'>
        <p>{inputs.description}</p>
      </div>
      <div className='experience-list'>
        <h3 className='subheader'>Work Experience</h3>
        {workInputs.map((workExperience, index) => {
          return (
            <div className='experience' key={index}>
              <div className='exp-heading'>
                <h5 className='job-title'>{workExperience.title}</h5>

                <div className='exp-details'>
                  <span className='company'>{workExperience.company}</span> |{' '}
                  {workExperience.workStartDate} - {workExperience.workEndDate}
                </div>
              </div>
              <div className='job-description'>
                {workExperience.jobDescription}
              </div>
            </div>
          );
        })}
      </div>
      <div className='education'>
        <h3 className='subheader'>Education</h3>
        <div className='education-list'>
          <div className='education-item'>
            <h4 className='degree'>{inputs.degree}</h4>
            <p>
              {inputs.school} | {inputs.schoolStartDate} -{' '}
              {inputs.schoolEndDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
