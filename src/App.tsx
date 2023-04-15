import React, { type ReactElement } from 'react';
import './App.css';
import TextField from './components/TextField';
import TextBox from './components/TextBox';

function App (): ReactElement {
  return (
    <div className="App">
      <TextField />
      <TextBox />
    </div>
  );
}

export default App;
