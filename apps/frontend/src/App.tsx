import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { IconButton, SimpleForm } from '@repro/component-library';
import { BrowserRouter, Route, Routes, Link } from 'react-router';
import TablePage from './TablePage';
import Table2Page from './Table2Page';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/table">Table</Link>
        <Link to="/table2">Table2</Link>
      </nav>
      <Routes>
        <Route path="/" element={
          <div>
            <KeyboardArrowDown />
            <IconButton label="Toggle" />
            <SimpleForm onSubmit={console.log} />
          </div>
        } />
        <Route path="/table" element={<TablePage />} />
        <Route path="/table2" element={<Table2Page />} />
      </Routes>
    </BrowserRouter>
  );
}
