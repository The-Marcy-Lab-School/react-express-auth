import React from 'react';
import exercises from '../data/exercises.json';

const ExercisePlaceHolder = () => {
  const filterExercises = (bodyPart, equipment = 'any', target = 'any') =>
    exercises.filter(
      (exercise) =>
        exercise.bodyPart === bodyPart &&
        (equipment === 'any' || exercise.equipment === equipment) &&
        (target === 'any' || exercise.target === target)
    );

  const calculateFrequencyCounter = () => {
    const frequencyCounter = {};
    exercises.forEach((exercise) => {
      if (frequencyCounter[exercise.bodyPart]) {
        frequencyCounter[exercise.bodyPart]++;
      } else {
        frequencyCounter[exercise.bodyPart] = 1;
      }
    });
    return frequencyCounter;
  };

  const frequencyCounter = calculateFrequencyCounter();
  const filteredExercises = filterExercises('back', 'body weight', 'any');

  console.log(frequencyCounter);

  return (
    <>
      <div>{filteredExercises}</div>
      <div>ExercisePlaceHolder</div>
    </>
  );
};

export default ExercisePlaceHolder;
