import { useState } from 'react'


const Getrand = (max) => {return Math.floor((Math.random() * max))}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  var selection = Getrand(8)
  const [selected, setSelected] = useState(selection)
  const [votes, setVotes] = useState(Array(999).fill(0))
  const copy = [ ...votes ]

  const handleVotes = () => {
    copy[selected] += 1
    setVotes(copy)
  }

  const getLargest = () => {
    var max=-1 
    var maxind=0
    var ind = 0
    copy.forEach(i => {
      if (i > max){
        max = i
        maxind = ind
      } 
      ind += 1
    })
  return maxind
  }

  return (
    
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} has {votes[getLargest()]} votes </p>
      <button onClick={() =>  setSelected(selection = Getrand(8))}> next anecdote </button>
      <button onClick={() => handleVotes() }>vote</button>
      <h1>Anecdote with most votes</h1>
      <p> {anecdotes[getLargest()]} has {votes[getLargest()]} votes </p>
    </div>
  )
}

export default App