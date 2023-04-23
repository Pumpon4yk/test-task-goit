import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-task-goit">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//basename="/test-task-goit"
