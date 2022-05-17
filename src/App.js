import React from 'react';
import DropDown from './components/DropDown';
import Accordion from './components/accordion';
import Modal from './components/modal';
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/Home';
import ColorPicker from './components/ColorPicker';
import StopTimer from './components/StopTimer';
import ToDo from './components/ToDo';
import Search from './components/Search';
function App() {

  let companies =["Apple","Microsoft","Google","Amazon","ebay"];
  let colors = ["red","blue","green"]

  let accordionData = [
    {
        "question":"section1",
        "answer": "Welcome to ReactJS"
    },
    {
        "question":"section2",
        "answer": "Welcome to NodeJS"
    },
    {
        "question":"section3",
        "answer": "Welcome to MongoDb"
    }
]

let message ="Welcome to Modal Box";
  return (
    <div className="maincontainer">
      <BrowserRouter>
        <Home/>
        <Routes >
          <Route exact path="/dropdown"  element={<DropDown companies={companies}/>}/>
          <Route exact path="/accordion"  element={
             <div className="smallcontainer">
             {accordionData.map((item,index)=> <Accordion title={item.question} content={item.answer} key={index}/>)}
             </div>
          }/>
          <Route exact path="/modal" element={<Modal message={message}/>}/>
          <Route exact path="/colorpicker" element={<ColorPicker colors={colors}/>}/>
          <Route exact path="/todo" element={<ToDo/>}/>
          <Route exact path="/stoptimer" element={<StopTimer/>}/>
          <Route exact path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
