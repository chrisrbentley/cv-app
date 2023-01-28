import React, { Component } from 'react';
import '../styles/resume.css';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      firstName,
      lastName,
      currentTitle,
      phoneNumber,
      email,
      location,
      title,
      company,
      workStartDate,
      workEndDate,
      jobDescription,
    } = this.props;

    return (
      <div id='resume'>
        <div id='resume-top'>
          <div id='name-title'>
            <h1 id='name'>
              {firstName} {lastName}
            </h1>
            <h3>{currentTitle}</h3>
          </div>
          <div id='contact-info'>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{location}</p>
          </div>
        </div>
        <hr />
        <div id='experience-list'>
          <h3 className='subheader'>Work Experience</h3>
          <div className='experience'>
            <div className='exp-heading'>
              <h5 className='job-title'>{title}</h5>
              <div className='exp-details'>
                <span className='company'>{company}</span> | {workStartDate} -{' '}
                {workEndDate}
              </div>
            </div>
            <div className='job-description'>{jobDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
