import React, { Component } from 'react';
import General from './components/General';
import Resume from './components/Resume';

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
    return (
      <div>
        <div className='left'>
          <General
            onFormSubmit={this.onFormSubmit}
            user={this.state.user}
            handleChange={this.handleChange}
          />
        </div>
        <div className='right'>
          <Resume firstName='hello' />
        </div>
      </div>
    );
  }
}

export default App;
