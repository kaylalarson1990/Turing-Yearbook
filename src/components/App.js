import React, { Component } from 'react';
import Person from './Person';
import AddPerson from './AddPerson';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    const yearbookStaff = this.state.staff.map(item => {
      return <Person 
        key={item.id}
        image={item.photo}
        name={item.name}
        quote={item.quote}
        superlative={item.superlative}
      />
    });

    const yearbookStudents = this.state.students.map(item => {
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
      <AddPerson />
      <h2>Staff</h2>
      </header>
      <div className="yearbook-section">
      {yearbookStaff}
      </div>
      <h2>Students</h2>
      <div className="yearbook-section">
      {yearbookStudents}
      </div>
      </div>
    );
  }
}

export default App;
