import { createRoot } from 'react-dom/client';
import App from './App';

import { assert } from '@cutting/assert';

const root = document.getElementById('root');
assert(!!root, 'root element not found');

createRoot(root).render(<App />);
