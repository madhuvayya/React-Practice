import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { render } from '@testing-library/react';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Hello />
      <Greet />
    </div>
  );
}

export default App;
