import React from 'react'
import Person from './person'

const Persons = ({persons, filter}) => (
    <div>
        {persons.map((person, i) => 
            <Person key={i} person={person} filter={filter}/>
        )}
    </div>
)

export default Persons