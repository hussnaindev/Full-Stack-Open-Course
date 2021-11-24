import React, { useState } from 'react'

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

const Statistics = ({good,neutral,bad}) =>
{
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
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={()=>setGood(good+1)}></Button>
      <Button text="neutral" onClick={()=>setNeutral(neutral+1)}></Button>
      <Button text="bad" onClick={()=>setBad(bad+1)}></Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App