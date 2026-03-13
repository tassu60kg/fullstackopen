import dataService from '../services/data'


const Form = ({persons, setPersons, newName, newNumber, setNewName, setNewNumber, setMessage}) => {

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
    if (!duplicate)  {
      dataService.create(personObject).then((returned) => {
      setPersons(persons.concat(returned))
      setNewName('')
      setNewNumber('')
      setMessage(`${newName} added`)
      setTimeout(() => {setMessage(null)}, 5000)
    }).catch(error => {
      console.log("oops :3")
      setMessage("this message should not appear")
      setTimeout(() => {setMessage(null)}, 5000)
    })
  }
    
    else if (window.confirm(`${newName} is already added, replace with new number?`)) {
      dataService.update(duplicate.id,personObject).then((returned) => {
      setPersons(persons.map((person) => person.id === duplicate.id ? returned : person))
      setNewName('')
      setNewNumber('')
      setMessage(`${newName} number changed`) 
      setTimeout(() => {setMessage(null)}, 5000)
    }).catch(error => {
      setPersons(persons.filter((person) => person.id != duplicate.id))
      console.log("oops :3")
      setMessage("this person doesn't exist")
      setTimeout(() => {setMessage(null)}, 5000)
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