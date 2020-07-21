import React from 'react'

const Person = ({person, filter}) => {
    if (person.name.toLowerCase().includes(filter.toLowerCase())) {
        return <div>{person.name} {person.number}</div>
    }
    return null
}

export default Person