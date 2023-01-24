'use client';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtons() {
  return (
    <Fab
      className="float-right sticky bottom-6 right-6 bg-blue-600"
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Fab>
  );
}
