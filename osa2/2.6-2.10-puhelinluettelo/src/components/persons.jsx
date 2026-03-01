const Persons = ({persons, search, deleteHandler}) => {
    return (
        <div>
        <h2>Numbers</h2>
        {persons.filter(person => 
        person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(person => 
        <li key={person.id}>
        {person.name} {person.number}
        <button onClick={() => deleteHandler(person.id, person.name)}>delete</button>
        </li>)}
        </div>
        )
} 
export default Persons