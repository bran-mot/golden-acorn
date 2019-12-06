import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import App from './components/Application';
import { BrowserRouter } from "react-router-dom";
import SimpleAcornApp from './components/SimpleAcornApp';

ReactDOM.render(
  <BrowserRouter>
      <SimpleAcornApp />
  </BrowserRouter>
  ,
  document.getElementById("root")
);

export default App;