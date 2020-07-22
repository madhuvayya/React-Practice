import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { render } from '@testing-library/react';
import Greet from './components/Greet';
import ClassComponent from './components/ClassComponent'
import GreetProps from './components/GreetProps';
import ClassProps from './components/ClassProps'
import MessageState from './components/MessageState';
import ConditionalRendering from './components/ConditionalRendering'
import Constructor from './components/Constructor'
import GetDerivedStateFromProps from './components/GetDerivedStateFromProps'
import ComponentDidMount from './components/ComponentDidMount'

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      {/* <Greet /> */}
      {/* <ClassComponent /> */}
      {/* <GreetProps name="Rajesh" id="123"><p>He is a engineer</p></GreetProps>
      <GreetProps name="Suresh" id="456" ><button>Action</button></GreetProps>
      <GreetProps name="Suresh" id="456" /> */}
      {/* <ClassProps name='Jayanth' />
      <ClassProps name='Thrinath' />
      <ClassProps />
      <ClassProps name='Tarun'><p>this is child</p></ClassProps> */}
      {/* <MessageState /> */}
      {/* <ConditionalRendering /> */}
      {/* <Constructor /> */}
      {/* <GetDerivedStateFromProps favcol="yellow"/> */}
      <ComponentDidMount />
    </div>
  );
}

export default App;
