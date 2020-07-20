import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { render } from '@testing-library/react';
import Greet from './components/Greet';
import ClassComponent from './components/ClassComponent'
import GreetProps from './components/GreetProps';

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      {/* <Greet /> */}
      {/* <ClassComponent /> */}
      <GreetProps name="Rajesh" id="123" />
      <GreetProps name="Suresh" id="456" />
    </div>
  );
}

export default App;
