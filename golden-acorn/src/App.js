import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Button from './components/Button'
import Display from './components/Display'

class SimpleGoldenAcornApp extends React.Component {
  constructor(){
    super();
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.state = {
      number: 0
    };
  }

  addOne(){
    this.setState(previousState => {
      return {
        number: previousState.number +1
      }
    })
  } 

  minusOne(){
    this.setState(previousState => {
      return {
        number: previousState.number -1
      }
    })
  } 

  render() {
    return (
      <div>
        <Button onClick={this.addOne}>Roll One</Button>
        <Display>{this.state.number}</Display>
        <Button onClick={this.minusOne}>Smoke one</Button>
      </div>
    );
  }
}

function App() {

  
  

  return (
    <div className="App">
      <SimpleGoldenAcornApp />
    </div>
  );
}

export default App;