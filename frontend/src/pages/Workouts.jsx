import Paginations from '../components/Pagination';
import WorkoutsForm from '../components/WorkoutsForm';
import { useWorkoutStore } from '../store/store';
import FormExercisePlace from '../components/FormExercisePlace';
export default function Workouts() {
  const { workout, setWorkout } = useWorkoutStore((state) => state.workout);

  return (
    <>
      <h1>THIS IS THE 3D MODEL AREA</h1>

      <FormExercisePlace />
    </>
  );
}
