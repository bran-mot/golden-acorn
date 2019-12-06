import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './components/Home';
import NavigationBar from './components/NavigationBar';
import {
	BrowserRouter as Router
} from 'react-router-dom';

ReactDOM.render(
  <Router>
      <NavigationBar />
  </Router>,
  document.getElementById("root")
);

export default App;