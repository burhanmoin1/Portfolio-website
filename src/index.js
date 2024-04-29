import React from 'react';
import './index.css';
import Homepage from './Homepage';
import SignUp from './SignUp';
import ScrollToTop from './ScrollToTop';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const domNode = document.getElementById('root');
render(<App />, domNode);