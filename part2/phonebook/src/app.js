import React, { useState, useEffect } from 'react'
import SuccessMessage from './components/SuccessMessage'
import ErrorMessage from './components/ErrorMessage'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import phoneService from './services/Phones'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

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
            setSuccessMessage(`Updated ${returnedPerson.name}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(`Information of ${newName} has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      }
    } else {
        phoneService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
            setSuccessMessage(`Added ${returnedPerson.name}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
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

      <SuccessMessage message={successMessage} />

      <ErrorMessage message={errorMessage} />

      <Filter filter={filter} handleFilterOnChange={handleFilterOnChange}/>

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handlePersonOnChange={handlePersonOnChange} newNumber={newNumber} handleNumberOnChange={handleNumberOnChange}/>

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App