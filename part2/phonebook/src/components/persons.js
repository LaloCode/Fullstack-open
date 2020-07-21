import React from 'react'
import Person from './person'

const Persons = ({persons, filter}) => (
    <div>
        {persons.map((person) => 
            <Person key={person.name} person={person} filter={filter}/>
        )}
    </div>
)

export default Persons