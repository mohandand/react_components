import React from 'react';
import DropDown from './components/DropDown';
import Accordion from './components/accordion';
function App() {

  let companies =["Apple","Microsoft","Google","Amazon","ebay"];

  return (
    <div className="maincontainer">
      <DropDown companies={companies}/>
      <Accordion/>
    </div>
  );
}

export default App;
