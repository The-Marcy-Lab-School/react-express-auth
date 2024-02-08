import React from 'react'
import "./styles/ExerciseList.css"
const ExerciseList = (props) => {
    const {exercises} = props
  return (
    <>
        <ul className='exercise-list'>
        {exercises.map((exercise) => {
         return (<li className='list-item' key={exercise.name + exercise.id}>{exercise.name}</li>)
    })}
    {exercises.length === 0 && "No exercises 😹"}
        </ul>
    </>
    
  )
}

export default ExerciseList