import React from 'react';
// import Person from './Person';

class AddPerson extends React.Component {
    constructor(props){
        super(props);
        this.state = { photo: '', name: '', quote: '', superlative: '' };
      }
     
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
      };

      resetInputs = () => {
        this.setState({ photo: '', name: '', quote: '', superlative: '' })        
      };

      submitNewStudent = (event) => {
        event.preventDefault();

        const newPerson = {...this.state, id: Date.now()}
        this.props.addStudent(newPerson);
        this.resetInputs();
      }
    
    render() {
        return (
        <section className="add-form">
        <h2>Add New Student</h2>
        <form>
        <label>Photo:</label>
        <input
           type="text"
           name="photo"
           placeholder="Enter photo URL.."
           value={this.state.photo}
           onChange={event => this.handleChange(event)}
         />
        <label>Name:</label>
         <input
           type="text"
           name="name"
           placeholder="Enter name.."
           value={this.state.name}
           onChange={event => this.handleChange(event)}
         />
        <label>Quote:</label>
         <input
           type="text"
           name="quote"
           placeholder="Enter quote.."
           value={this.state.quote}
           onChange={event => this.handleChange(event)}
         />
        <label>Superlative:</label>
         <input
           type="text"
           name="superlative"
           placeholder="Enter superlative.."
           value={this.state.superlative}
           onChange={event => this.handleChange(event)}
         />
         <button onClick={event => this.submitNewStudent(event)}>Submit!</button>
       </form>
       </section>
        )
    }
}

export default AddPerson;
