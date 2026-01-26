import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  

  if (good + neutral + bad === 0) {
    return(
      <p>no feedback given</p>
    )
    } else {
  return (
    <>
      <StatisticLine text={"good"} value={good}/>
      <StatisticLine text={"neutral"} value={neutral}/>
      <StatisticLine text={"bad"} value={bad}/>
      <StatisticLine text={"total"} value={good + neutral + bad}/>
      <StatisticLine text={"average"} value={(good + (bad*-1)) / (good+neutral+bad)}/>
      <StatisticLine text={"positive"} value={(good / (good + neutral + bad)*100) + "%"}/>
    </>
  )
}
} 

const StatisticLine = ({text, value}) => {
  return(
  <>
  <tr>
  <td> {text} </td> 
  <td> {value} </td> 
  </tr>
  </>
  )
}

const Button = ({onClick, text}) => {
  return(
  <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleGood = () => {setGood(good+1)}
const handleNeutral = () => {setNeutral(neutral+1)}
const handleBad = () => {setBad(bad+1)}



  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App