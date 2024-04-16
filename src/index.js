import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import FirstContainer from './FirstContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <FirstContainer />
  </React.StrictMode>
);

