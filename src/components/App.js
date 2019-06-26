import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cohort from './Cohort';
import AddPerson from './AddPerson';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
      isHidden: true
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  addStudent = (newStudent) => {
    this.setState({ students: [...this.state.students, newStudent] })
  }

  render() {
    const Staff = () => (
      <div>
        <h2>Staff</h2>
        <Cohort data={this.state.staff} />
      </div>
    );
    
   const Students = () => (
      <div>
        <h2>Students</h2>
        <Cohort data={this.state.students} />
      </div>
    );

    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      <div>
        <button onClick={this.toggleHidden} >
          Click to add new student!
        </button>
        {!this.state.isHidden && <AddPerson addStudent={this.addStudent} />}
      </div>
      <Router>
        <Link to="/staff" className="togglePerson"><span>Staff</span></Link> | 
        <Link to="/students"><span>Students</span></Link> |
        <Route path="/staff" component={Staff} />
        <Route path="/students" component={Students} />
      </Router>
      </header>
      </div>
    );
  }
}

export default App;
