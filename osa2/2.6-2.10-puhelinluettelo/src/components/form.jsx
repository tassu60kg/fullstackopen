import axiosService from '../services/axios'

const Form = ({persons, setPersons, newName, newNumber, setNewName, setNewNumber}) => {

    const handleNameInput = (event) => {
    setNewName(event.target.value)
  }
const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const personObject ={
      name: newName,
      number: newNumber
    }
    const duplicate = (persons.find((person) => person.name === newName))
    console.log(duplicate)
    if (!duplicate)  {
      axiosService.create(personObject).then((returned) => {
      setPersons(persons.concat(returned))
      setNewName('')
      setNewNumber('')
    })
    }
    else if (window.confirm(`${newName} is already added, replace with new number?`)) {
      console.log(duplicate)
      axiosService.update(duplicate.id,personObject).then((returned) => {
      setPersons(persons.map((person) => person.id === duplicate.id ? returned : person))
      setNewName('')
      setNewNumber('')
    })
    }
  }
return (
<>    
    <h2>add a new</h2>
    <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleNameInput}/></div>
        <div>number: <input value= {newNumber} onChange={handleNumberInput}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
</>
)}
export default Form