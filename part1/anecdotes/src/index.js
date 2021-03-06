import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const NumberOfVotes = (props) => (
  <div>
    has {props.votes} votes
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setAll] = useState(new Array(6).fill(0))
  const [maxVotesIndex, setMaxIndex] = useState(0)

  const makeVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    if (copy[selected] > votes[maxVotesIndex]) {
      setMaxIndex(selected)
    }
    setAll(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      <NumberOfVotes votes={votes[selected]}/>
      <Button text="vote" handleClick={makeVote}/>
      <Button text="next anecdote" handleClick={() => setSelected(Math.floor(Math.random() * 6))}/>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[maxVotesIndex]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)