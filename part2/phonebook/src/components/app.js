import React, { useState } from 'react'
import Person from './person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName
    }

    setNewName('')
    if (persons.some((person) => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
    } else {
        setPersons(persons.concat(personObject))
    }
  }

  const handlePersonOnChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonOnChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => 
        <Person key={person.name} person={person}/>
      )}
      <br></br><br></br> debug: {newName}
    </div>
  )
}

export default App