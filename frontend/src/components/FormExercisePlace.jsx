import React from 'react'
import { useState } from 'react'
import exercises from '../data/exercises.json'
import ExerciseList from './ExerciseList'

const FormExercisePlace = () => {
    // const [selectedBodyPart, setSelectedBodyPart] = useState("")
    // const [selectedEquipment, setSelectedEquipment] = useState("any")
    // const [selectedTarget, setSelectedTarget] = useState("any")
    const [filteredExercises, setFilteredExercises] = useState([])
    const filterExercises = (bodyPart, equipment='any', target='any') => {
        return exercises.filter(exercise => {
            return exercise.bodyPart === bodyPart &&
                (equipment === 'any' || exercise.equipment === equipment) &&
                (target === 'any' || exercise.target === target);
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        console.log(form.bodyParts.value)
        const filteredArr = filterExercises(form.bodyParts.value, form.equipment.value, form.target.value)
        setFilteredExercises(filteredArr)
        console.log(filteredArr)


    }
  return (
    <>
    <form onSubmit={handleSubmit} style={{ width: '400px' }}>


      <label htmlFor="bodyParts">Select Body part:</label>
      <select id="bodyParts" name="bodyParts" required defaultValue={''}>
        <option value="" disabled>
          Select a Body Part
        </option>
        <option value="back">back</option>
        <option value="cardio">cardio</option>
        <option value="chest">chest</option>
        <option value="lower arms">lower arms</option>
        <option value="lower legs">lower legs</option>
        <option value="shoulders">shoulders</option>
        <option value="upper arms">upper arms</option>
        <option value="upper legs">upper legs</option>
        <option value="waist">waist</option>


      </select>
      <label htmlFor="equipment">Select Equipment:</label>
      <select id="equipment" name="equipment"  defaultValue={'any'} >
      <option value="any">any</option>
      <option value="body weight">body weight</option>
      <option value="medicine ball">medicine ball</option>
      <option value="stability ball">stability ball</option>
      <option value="band">band</option>
        <option value="dumbbell">dumbbell</option>
        <option value="kettlebell">kettlebell</option>
        <option value="resistance band">resistance band</option>
        <option value="wheel roller">wheel roller</option>
      </select>
      <label htmlFor="target">Select target:</label>
      <select  id="target" name="target"  defaultValue={'any'}>
      
      <option value="" disabled>
          Select a target
        </option>
        <option value="any">any</option>
        <option value="abs">abs</option>
        <option value="quads">quads</option>
        <option value="calves">calves</option>
        <option value="lats">lats</option>
        <option value="pectorals">pectorals</option>
        <option value="glutes">glutes</option>
        <option value="cardiovascular system">cardiovascular system</option>
        <option value="spine">spine</option>
        <option value="upper back">upper back</option>
        <option value="biceps">biceps</option>
        <option value="triceps">triceps</option>
        <option value="delts">delts</option>
        <option value="forearms">forearms</option>
        <option value="traps">traps</option>
        <option value="adductors">adductors</option>
        <option value="hamstrings">hamstrings</option>
      </select>
      <button>Update Exercises</button>
    </form>
    <ExerciseList exercises={filteredExercises}/>

    </>
  )
}

export default FormExercisePlace