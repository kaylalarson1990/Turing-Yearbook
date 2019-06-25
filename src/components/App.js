import React, { Component } from 'react';
import Person from './Person';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }

  render() {
    const yearbookInfo = this.state.staff.map(item => {
      return <Person 
        key={item.id}
        image={item.photo}
        name={item.name}
        quote={item.quote}
        superlative={item.superlative}
      />
    });

    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      <h2>Staff</h2>
      </header>
      <div className="yearbook-section">
      {yearbookInfo}
      </div>
      </div>
    );
  }
}

export default App;
