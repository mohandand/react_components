import React from 'react';
import DropDown from './components/DropDown';
import Accordion from './components/accordion';
import Modal from './components/modal';
function App() {

  let companies =["Apple","Microsoft","Google","Amazon","ebay"];

  let accordionData = [
    {
        "question":"section1",
        "answer": "pen"
    },
    {
        "question":"section2",
        "answer": "bat"
    },
    {
        "question":"section3",
        "answer": "bat"
    }
]

let message ="Modal Box";
  return (
    <div className="maincontainer">
      <DropDown companies={companies}/>
      <div className="accordioncontainer">
      {accordionData.map((item,index)=> <Accordion title={item.question} content={item.answer} key={index}/>)}
      </div>
      <Modal message={message}/>
    </div>
  );
}

export default App;
