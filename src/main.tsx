import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
console.log('Root created');

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
console.log('Render called');
