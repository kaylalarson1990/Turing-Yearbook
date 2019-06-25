import React, { Component } from 'react';
import Cohort from './Cohort';
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

  addStudent = (newStudent) => {
    this.setState({ students: [...this.state.students, newStudent] })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      <AddPerson addStudent={this.addStudent} />
      <h2>Staff</h2>
      </header>
      <Cohort 
        staff={this.state.staff}
        students={this.state.students}
      />
      </div>
    );
  }
}

export default App;
