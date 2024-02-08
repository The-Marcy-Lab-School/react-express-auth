import Paginations from '../components/Pagination';
import WorkoutsForm from '../components/WorkoutsForm';
import { useWorkoutStore } from '../store/store';
import FormExercisePlace from '../components/FormExercisePlace';
export default function Workouts() {
  const workout = useWorkoutStore((state) => state.workout);
  const setWorkout = useWorkoutStore((state) => state.setWorkout);


  return (
    <>
      <h1>THIS IS THE 3D MODEL AREA</h1>

      <FormExercisePlace/>

      <h3>{workout}</h3>
      <Paginations />
    </>
  );
}
