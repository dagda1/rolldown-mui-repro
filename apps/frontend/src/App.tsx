import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { IconButton, SimpleForm } from '@repro/component-library';

export default function App() {
  return (
    <div>
      <KeyboardArrowDown />
      <IconButton label="Toggle" />
      <SimpleForm onSubmit={console.log} />
    </div>
  );
}
