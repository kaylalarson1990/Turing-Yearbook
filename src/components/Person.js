import React from 'react';
// import './App.css';

// PERSON COMPONENT CODE GOES HERE
const Person = (props) => {
    return(
        <div className="yearbook-card">
            <img className="images" src={props.image}/>
            <h3>{props.name}</h3>
            <p className="quotes">{props.quote}</p>
            <p className="superlative">{props.superlative}</p>
        </div>
    )
}

export default Person;
