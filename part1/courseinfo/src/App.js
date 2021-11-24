import React from 'react'


const Header = (props) => 
{
  
  return(
    <div>
       <h1>Course: {props.course}</h1>
    </div>
  )
  
}

const Part = (props) =>
{
  
  return(
    <div>
      {
      props.part.map( part => 
      <>
      <p>Part: {part.name}</p>
      <p>Exercises: {part.exercises}</p>
      </>
      )}
    </div>

  )
} 

const Content = (props) =>
{
  
  return(
    <Part part={props.parts} />
  )
  
}

const Total = (props) =>
{
  
  return(
    <div>
      <p>Total Exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>      
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>
  )
}

export default App