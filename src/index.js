import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { MeetupsContextProvider } from './contexts/MeetupsContext';

ReactDOM.render(
  <React.StrictMode>
    <MeetupsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MeetupsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
