import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Button = (props) =>
{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) =>
{
  return(
    <p>{props.text} {props.value}</p>
  )

}

const Statistics = () =>
{

  const good = useSelector(state => state.good)
  const bad = useSelector(state => state.bad)
  const neutral = useSelector(state => state.neutral)

  console.log(good)
  console.log(bad)
  console.log(neutral)
  const all = good+neutral+bad
  const average = (good*1 + neutral*0 + bad*(-1))/all
  const positive = (good/all)*100

  if(good===0 && bad===0 && neutral===0)
  return(
    <>
    <h1>Statistics</h1>
    <p>No feedback given</p>
    </>
  )

  return(
    <>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive}</td>
        </tr>
      </tbody>
    </table>
    {/*
    <StatisticLine text="good" value={good} /> 
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive} />
    */}   
    </>
  )
}




const App = () => {
  // save clicks of each button to its own state  
   
  const dispatch = useDispatch()

  const countHandler = (feedback) =>
  {
    console.log('feedback is',feedback)
    dispatch({type: feedback}) 
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => countHandler('GOOD')}></Button>
      <Button text="neutral" onClick={()=> countHandler('NEUTRAL')}></Button>
      <Button text="bad" onClick={() => countHandler('BAD')}></Button>
      <Statistics/>
    </div>
  )
}

export default App