import React from 'react';
import Person from './Person';

const Cohort = ({staff, students}) => {
        const yearbookStaff = staff.map(item => {
          return <Person 
            key={item.id}
            image={item.photo}
            name={item.name}
            quote={item.quote}
            superlative={item.superlative}
          />
        });
          
        const yearbookStudents = students.map(item => {
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
            {yearbookStaff}
            {yearbookStudents}
          </div>
        )
}

export default Cohort;
