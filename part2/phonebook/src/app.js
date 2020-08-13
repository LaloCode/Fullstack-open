import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/persons'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import phoneService from './services/phones'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    phoneService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber,
    }

    if (persons.some((person) => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName)
        const newPerson = {...person, number: newNumber}

        phoneService
          .update(newPerson.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== newPerson.id ? person : returnedPerson))
          })
      }
    } else {
        phoneService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
          })
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

  const handleDelete = (name) => {
    if (window.confirm(`Delete ${name}?`)) {
      const elementToDelete = persons.find(person => {
        return person.name === name
      })
  
      phoneService
        .erase(elementToDelete.id)
  
      setPersons(persons.reduce((result, person) => {
        if (person.name !== elementToDelete.name) {
          result.push(person)
        }
        return result
      }, []))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterOnChange={handleFilterOnChange}/>

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handlePersonOnChange={handlePersonOnChange} newNumber={newNumber} handleNumberOnChange={handleNumberOnChange}/>

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App