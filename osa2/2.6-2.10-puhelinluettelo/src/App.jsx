import { useState, useEf, useEffect } from 'react'
import Form from './components/form'
import Persons from './components/persons'
import Filter from './components/filter'
import dataService from './services/data'
const baseUrl = 'http://localhost:3001/persons'
import Notification from './components/notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('') 
  const [message, setMessage] = useState(null)
  
  const deleteHandler = (id, name) => {
    if (window.confirm(`${name} will be obliterated`)) {
    dataService.exterminate(id).then(() => {
      setPersons(persons.filter((person) => person.id != id))
      setMessage(`${name} was obliterated`) 
      setTimeout(() => {setMessage(null)}, 5000)
    }).catch(error => {
      console.log("oops :3")
      setPersons(persons.filter((person) => person.id != id))
      setMessage(`${name} doesn't exist or has already been deleted`)
      setTimeout(() => {setMessage(null)}, 5000)
    })
  }
  }

  useEffect(() => {
      dataService.getAll().then((initialPeople) => {
        setPersons(initialPeople)
      }).catch(error => {
      console.log("oops :3")
      setMessage("db may not exist")
      setTimeout(() => {setMessage(null)}, 5000)
    })
  }, [])


  return (
    <div>
      <Notification message={message} />
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch}/>
      <Form persons={persons} 
        setPersons={setPersons} 
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber}
        setMessage={setMessage}/>
      
      <Persons persons={persons} 
        search={search}
        deleteHandler={deleteHandler}
        />
    </div>
  )

}

export default App