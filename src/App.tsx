import React, { type ReactElement } from 'react';
import './App.css';
import TextField from './components/TextField';
import TextBox from './components/TextBox';
import reversedTextState from './recoil/reversedTextState';
import oddTextIndicesState from './recoil/oddTextIndicesState';

function App (): ReactElement {
  return (
    <div className="App">
      <TextField />
      <TextBox recoilValue={reversedTextState} />
      <TextBox recoilValue={oddTextIndicesState} />
    </div>
  );
}

export default App;
