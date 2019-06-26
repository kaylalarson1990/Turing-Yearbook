import React from 'react';
import Person from './Person';

const Cohort = ({data}) => {
        const yearbookPerson = data.map(item => {
          return <Person 
            key={item.id}
            image={item.photo}
            name={item.name}
            quote={item.quote}
            superlative={item.superlative}
          />
        });
        
        return (
          <div className="yearbook-section">
            {yearbookPerson}
          </div>
        )
}

export default Cohort;
