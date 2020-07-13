import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  let good = props.good
  let bad = props.bad
  let neutral = props.neutral

  if (good + bad + neutral < 1) {
    return (
      <p>No feedback given</p>
    )
  }
  
  return (
    <table>
      <tbody>
        <Statistic text="good" data={good}/>
        <Statistic text="neutral" data={neutral}/>
        <Statistic text="bad" data={bad}/>
        <Statistic text="all" data={good + neutral + bad}/>
        <Statistic text="average" data={(good - bad)/(good + neutral + bad)}/>
        <Statistic text="positive" data={(good/(good + neutral + bad))*100 + ' %'}/>
      </tbody>
    </table>  
  )
}

const Statistic = (props) => (
  <tr>
    <td>{props.text} {props.data}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)