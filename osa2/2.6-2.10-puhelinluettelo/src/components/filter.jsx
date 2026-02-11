const Filter = ({search, setSearch}) => {
    const handleSearchInput = (event) => {
    setSearch(event.target.value)}
    
    return (
        <div>filter shown with <input value={search} onChange={handleSearchInput}/></div>
    )
}

export default Filter