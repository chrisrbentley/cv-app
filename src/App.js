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
      company: 'Spotify',
      workStartDate: '2021',
      workEndDate: 'Present',
      jobDescription: 'Used react to build the front end of web apps.',
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
      <div>
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
          title={this.state.title}
          company={this.state.company}
          workStartDate={this.state.workStartDate}
          workEndDate={this.state.workEndDate}
          jobDescription={this.state.jobDescription}
        />
      </div>
    );
  }
}

export default App;
