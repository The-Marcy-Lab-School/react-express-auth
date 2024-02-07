import WorkoutsForm from '../components/WorkoutsForm';
import { useWorkoutStore } from '../store/store';

export default function Workouts() {
  const workout = useWorkoutStore((state) => state.workout);
  const setWorkout = useWorkoutStore((state) => state.setWorkout);

  const formHandler = (e) => {
    setWorkout(e.target.value);
  };

  return (
    <>
      <h1>THIS IS THE 3D MODEL AREA</h1>

      <WorkoutsForm onChange={formHandler} />

      <h3>{workout}</h3>
    </>
  );
}
