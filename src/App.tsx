import React, { type ReactElement } from 'react';
import './App.css';
import TextField from './components/TextField';
import TextBox from './components/TextBox';
import reversedTextState from './recoil/reversedTextState';

function App (): ReactElement {
  return (
    <div className="App">
      <TextField />
      <TextBox recoilValue={reversedTextState} />
    </div>
  );
}

export default App;
