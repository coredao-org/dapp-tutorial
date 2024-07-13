// src/index.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import './style/index.css'; // Ensure you have a CSS file for custom styles
import App from './components/App';

// Ensure the root element is available
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

// Render the App component
root.render(<App />);
