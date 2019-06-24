import React from 'react';
import Person from './Person';
import './Cohort.css';
import people from './src/data/yearbook-data.js';

// COHORT COMPONENT CODE GOES HERE
const Cohort = ({photo}) => {
    return (
        <div style={{ background: 'white', borderRadius: '5px', width: '50px', height: '100px' }}>
            <img className={people.photo} src={photo} alt=""/>
            {/* <ol>
                {ingredients.map(ingredient => (
                    <li className={style.ingredientList}>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {Math.round(calories)}</p> */}
        </div>
    )
}

export default Cohort;
