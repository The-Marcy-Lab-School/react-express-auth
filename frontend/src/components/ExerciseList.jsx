import './styles/ExerciseList.css';
import Paginations from './Pagination';
import { useExerciseStore, usePaginationStore } from '../store/store';

const ExerciseList = (props) => {
  const { exercises } = props;

  const { exerciseIndex, setExerciseIndex } = useExerciseStore(
    (state) => state
  );

  const { page, previous } = usePaginationStore((state) => state);

  const handleExerciseClick = (index) => {
    setExerciseIndex(index);
  };

  return (
    <>
      <ul className="exercise-list">
        {exercises.slice(previous, page).map((exercise, index) => (
          <li
            className={`list-item ${exerciseIndex === index ? 'active' : ''}`}
            bindex={index}
            key={exercise.name + exercise.id}
            onClick={() => handleExerciseClick(index)}
          >
            {exercise.name}
          </li>
        ))}
        {(exercises.length === 0 && 'No exercises 😹') || <Paginations />}
      </ul>
    </>
  );
};

export default ExerciseList;
