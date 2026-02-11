import { useState } from 'react'
import Form from './components/form'
import Persons from './components/persons'
import Filter from './components/filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
   

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
        search={search}/>
    </div>
  )

}

export default App