import React from 'react';
import DropDown from './components/DropDown';
import Accordion from './components/accordion';
function App() {

  let companies =["Apple","Microsoft","Google","Amazon","ebay"];

  let questions = [
    {
        "question":"Which is not example of HTML Tag",
        "answer": "pen"
    },
    {
        "question":"Which is an example of HTML Tag",
        "answer": "bat"
    },
    {
        "question":"Which is an example of CSS attribute",
        "answer": "bat"
    }
]

  return (
    <div className="maincontainer">
      <DropDown companies={companies}/>
      <Accordion questions = {questions}/>
    </div>
  );
}

export default App;
