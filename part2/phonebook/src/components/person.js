import React from 'react'

const Person = ({person, filter, handleDelete}) => {
    if (person.name.toLowerCase().includes(filter.toLowerCase())) {
        return <div>{person.name} {person.number} <button onClick={() => {
            handleDelete(person.name)
        }}> delete </button></div>
    }
    return null
}

export default Person