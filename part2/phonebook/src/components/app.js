import React, { useState } from 'react'
import Persons from './persons'
import Filter from './filter'
import PersonForm from './personForm'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber
    }

    setNewName('')
    setNewNumber('')
    if (persons.some((person) => person.name === newName)) {
        alert(`${newName} is already added to phonebook`)
    } else {
        setPersons(persons.concat(personObject))
    }
  }

  const handlePersonOnChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberOnChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterOnChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterOnChange={handleFilterOnChange}/>

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handlePersonOnChange={handlePersonOnChange} newNumber={newNumber} handleNumberOnChange={handleNumberOnChange}/>

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App