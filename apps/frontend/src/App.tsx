import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { IconButton, SimpleForm } from '@repro/component-library';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router';

const TablePage = lazy(() => import('./TablePage'));
const Table2Page = lazy(() => import('./Table2Page'));

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/table">Table</Link>
        <Link to="/table2">Table2</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}
