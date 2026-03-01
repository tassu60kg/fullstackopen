import { useState, useEf, useEffect } from 'react'
import Form from './components/form'
import Persons from './components/persons'
import Filter from './components/filter'
import axiosService from './services/axios'
const baseUrl = 'http://localhost:3001/persons'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  
  
  const deleteHandler = (id, name) => {
    if (window.confirm(`${name} will be obliterated`)) {
    axiosService.exterminate(id).then(() => {
      setPersons(persons.filter((person) => person.id != id))
    })}
  }

  useEffect(() => {
      axiosService.getAll().then((initialPeople) => {
        setPersons(initialPeople)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch}/>
      <Form persons={persons} 
        setPersons={setPersons} 
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber}/>
      
      <Persons persons={persons} 
        search={search}
        deleteHandler={deleteHandler}
        />
    </div>
  )

}

export default App