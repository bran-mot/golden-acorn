import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function Button(props) {
    return <button>{props.label}</button>;
  }

  return (
    <div className="App">
      <Button label="Buy One"></Button>
      <Button label="Eat One"></Button>
    </div>
  );
}

export default App;