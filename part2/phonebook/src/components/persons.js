import React from 'react'
import Person from './person'

const Persons = ({persons, filter, handleDelete}) => (
    <div>
        {persons.map((person, i) => 
            <Person key={i} person={person} filter={filter} handleDelete={handleDelete}/>
        )}
    </div>
)

export default Persons