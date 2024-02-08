import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginations({ handleChange }) {
  return (
    <Stack spacing={9} alignItems="center">
      <Pagination
        count={10}
        color="warning"
        onChange={handleChange}
        sx={{
          '&:root': {
            color: 'red',
          },
        }}
      />
    </Stack>
  );
}
