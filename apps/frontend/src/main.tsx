import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import App from './App';

const Other = lazy(() => import('./Other'));

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/other" element={<Suspense fallback="loading"><Other /></Suspense>} />
    </Routes>
  </BrowserRouter>
);
