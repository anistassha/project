import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyContextProvider from './Context/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);