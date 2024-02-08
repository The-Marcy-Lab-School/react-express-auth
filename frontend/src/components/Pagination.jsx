import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useExerciseStore, usePaginationStore } from '../store/store';

export default function Paginations() {
  const { setPage, setPrevious, pageNumber, setPageNumber, pageLength } =
    usePaginationStore((state) => state);

  const setExerciseIndex = useExerciseStore((state) => state.setExerciseIndex);

  const handlePagination = (event, value) => {
    setPageNumber(value);
    setPrevious(value);
    setPage(value);

    setExerciseIndex(null);
  };

  return (
    <Stack spacing={9} alignItems="center">
      <Pagination
        count={pageLength}
        page={pageNumber}
        onChange={handlePagination}
      />
    </Stack>
  );
}
