const Form = ({persons, setPersons, newName, newNumber, setNewName, setNewNumber}) => {

    const handleNameInput = (event) => {
    setNewName(event.target.value)
  }
const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }
    const addPerson = (event) => {
    event.preventDefault()
    if (!persons.find((person) => person.name === newName) ) { 
    const personObject ={
      name: newName,
      number: newNumber}
      console.log(personObject)
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')}
    else {alert(`${newName} is already added to the phonebook `)}
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