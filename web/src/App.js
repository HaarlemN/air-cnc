import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/global.css';

import Routes from './routes';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
