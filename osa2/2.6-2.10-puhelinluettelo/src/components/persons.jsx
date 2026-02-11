const Persons = ({persons, search}) => {
    return (
        <div>
        <h2>Numbers</h2>
        {persons.filter(person => 
        person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(person => 
        <li key={person.name}>{person.name} {person.number}</li>)}
        </div>
        )
} 
export default Persons