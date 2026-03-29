import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

interface IconButtonProps {
  label: string;
}

export function IconButton({ label }: IconButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(!open)}>
      {label}
      {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
    </button>
  );
}
