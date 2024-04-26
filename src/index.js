import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import FirstContainer from './FirstContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';
import SignUp from './SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <FirstContainer />
    <SecondContainer />
    <ThirdContainer />
    <SignUp/>
  </React.StrictMode>
);

