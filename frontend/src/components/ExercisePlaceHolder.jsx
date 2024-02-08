import exercises from '../data/exercises.json';

const ExercisePlaceHolder = () => {
  const filterExercises = (bodyPart, equipment = 'any', target = 'any') => {
    return exercises.filter(
      (exercise) =>
        exercise.bodyPart === bodyPart &&
        (equipment === 'any' || exercise.equipment === equipment) &&
        (target === 'any' || exercise.target === target)
    );
  };
  const frequencyCounter = {};

  exercises.forEach((exercise) => {
    if (frequencyCounter[exercise.bodyPart]) {
      frequencyCounter[exercise.bodyPart]++;
    } else {
      frequencyCounter[exercise.bodyPart] = 1;
    }
  });

  console.log(frequencyCounter);
  return (
    <>
      {console.log(filterExercises('back', 'body weight', 'any'))}
      <div>ExercisePlaceHolder</div>
    </>
  );
};

export default ExercisePlaceHolder;
