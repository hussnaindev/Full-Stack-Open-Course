import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import increaseVotes from './Actions/increaseVotes'
import selectAnecdote from './Actions/selectAnecdote'

const Button = (props) =>
{
  return(
       <button onClick={props.onClick}>
         {props.text}
       </button>
  )
}


const App = () => {
  
  const anecdotes = useSelector(state => state.anecdotes)
  const selected = useSelector(state => state.selected)
  const votes = useSelector(state => state.votes)

  const dispatch = useDispatch()


   // helper function
  const findMax = (array) =>
  {
    
    let max = array[0]
    let maxIndex = 0
    for(let i=0; i<7; i++)
    {
      if(array[i]>max)
      {
        max = array[i]
        maxIndex = i
      }
    }

    return maxIndex
  }

   // helper function
  const incVotes = (index) =>
  {
    
    const copy = { ...votes }
    copy[index] += 1
    return copy
  }

  
  return (
    <div>

      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>

      <Button text="vote" onClick={() => dispatch(increaseVotes())}/>
      <Button text="next anecdote"  onClick={() => dispatch(selectAnecdote())}/>

      <h1>Anecdote with most votes</h1>
      {anecdotes[findMax(votes)]}
      <p>has {votes[findMax(votes)]} votes </p>

    </div>
  )
}

export default App