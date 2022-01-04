import React from 'react';
import DropDown from './components/DropDown';
function App() {

  companies =[Apple,Microsoft,Google,Amazon,]
  return (
    <DropDown options={compnies}/>
  );
}

export default App;
