import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Components
import App from './App';
import ToggleContextProvider from './context/ToggleContext';
// Styles
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleContextProvider>
        <App />
      </ToggleContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
