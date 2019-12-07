import React from 'react';
import './App.css';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import SimpleAcornApp from './components/SimpleAcornApp';

const App = () => <Router>
  <NavigationBar />
  <Switch>
    {/* If the current URL is /about, this route is rendered
  while the rest are ignored */}
    <Route exact path="/simple/states">
      <SimpleAcornApp />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
</Router>;

export default App;
