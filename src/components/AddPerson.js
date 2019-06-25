import React from 'react';
// import Person from './Person';

class AddPerson extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: '' };
      }
     
      handleChange = event => {
        this.setState({ name: event.target.value });
      };
    
    render() {
        return (
        <form>
         <input
           type="text"
           name="name"
           value={this.state.name}
           onChange={this.handleChange}
         />
         <button onClick={this.handleChange}>Submit</button>
       </form>
        )
    }
}

export default AddPerson;
