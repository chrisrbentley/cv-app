import React, { Component } from 'react';
import Form from './components/Form';
import './styles/form.css';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
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
      <div id='wrapper'>
        <Form
          handleChange={this.handleChange}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    );
  }
}

export default App;
