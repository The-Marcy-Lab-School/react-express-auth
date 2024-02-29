import { useEffect, useState } from 'react';
import exercises from '../data/exercises.json';
import ExerciseList from './ExerciseList';
import {
  useExerciseStore,
  usePaginationStore,
  usePartStore,
} from '../store/store';

const FormExercisePlace = () => {
  const { partSelected, setPartSelected } = usePartStore((state) => state);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [equipmentSelected, setEquipmentSelected] = useState('any');

  const { exerciseIndex, setExerciseIndex } = useExerciseStore(
    (state) => state
  );

  const { reset, setPageLength } = usePaginationStore((state) => state);

  const filterExercises = (bodyPart, equipment = 'any', target = 'any') =>
    exercises.filter(
      (exercise) =>
        exercise.bodyPart === bodyPart &&
        (equipment === 'any' || exercise.equipment === equipment) &&
        (target === 'any' || exercise.target === target)
    );

  const handleEquipmentChange = (e) => {
    setEquipmentSelected(e.target.value);
  };
  useEffect(() => {
    if (partSelected !== 'none') {
      console.log('buh' + partSelected);
      const filteredArr = filterExercises(partSelected, equipmentSelected);

      setExerciseIndex(null);
      setFilteredExercises(filteredArr);
      setPageLength(Math.ceil(filteredArr.length / 6));
    }
  }, [partSelected, equipmentSelected]);

  return (
    <>
      <div className="max-h-full">
        <div className="flex flex-col">
          <div>
            <ExerciseList exercises={filteredExercises} />
          </div>

          <div
            className="flex justify-center items-center shadow-md p-5 max-h-full text-white font-semibold bg-green-500"
            style={{ display: 'flex' }}
          >
            <p>
              {exerciseIndex !== null &&
                filteredExercises[exerciseIndex]?.instructions}
            </p>
          </div>

          {/* style={{ width: '800px' }} */}
          <div className="w-full max-h-screen">
            <form className="w-full">
              {/* <label htmlFor="equipment">Select Equipment:</label> */}
              <select
                className="w-full mt-5 bg-green-500 text-white shadow-md p-2 font-medium cursor-pointer"
                id="equipment"
                name="equipment"
                defaultValue={'any'}
                onChange={handleEquipmentChange}
              >
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
              {/* <button>Update Exercises</button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormExercisePlace;
