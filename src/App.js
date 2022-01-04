import React from 'react';
import DropDown from './components/DropDown';
function App() {

  let companies =["Apple","Microsoft","Google","Amazon","ebay"];

  return (
    <div>
    <DropDown companies={companies}/>
    </div>
  );
}

export default App;
