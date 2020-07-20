import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
