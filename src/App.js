import React, { Component } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import './styles/form.css';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      currentTitle: 'Software Engineer',
      email: 'johndoe@email.com',
      phoneNumber: '111-222-3333',
      location: 'Atlanta, Georgia',
      title: 'Software Engineer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
      company: 'Spotify',
      workStartDate: '2021',
      workEndDate: 'Present',
      jobDescription: 'Used react to build the front end of web apps.',
      school: 'Georgia Tech',
      degree: 'Bachelor of Computer Science',
      schoolStartDate: '2018',
      schoolEndDate: '2022',
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    // conditional render > form submitted? show resume

    return (
      <div id='container'>
        <div id='wrapper'>
          <Form
            handleChange={this.handleChange}
            onFormSubmit={this.onFormSubmit}
          />
        </div>
        <Resume
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          currentTitle={this.state.currentTitle}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          location={this.state.location}
          description={this.state.description}
          title={this.state.title}
          company={this.state.company}
          workStartDate={this.state.workStartDate}
          workEndDate={this.state.workEndDate}
          jobDescription={this.state.jobDescription}
          school={this.state.school}
          degree={this.state.degree}
          schoolStartDate={this.state.schoolStartDate}
          schoolEndDate={this.state.schoolEndDate}
        />
      </div>
    );
  }
}

export default App;
