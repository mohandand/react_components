import React, {useState} from 'react';

const Accordion = ({questions}) => {

    const [symbol, setSymbol] = useState("+");

    const[answerstyle, setAnswerstyle] = useState("hideText")

    const changeStyle = () => {
        setSymbol("-");
        setAnswerstyle("show");
    }

    let element = questions.map((item,index)=>{
        return(
            <div className='element' key={index}>
               <div className="question">
                 <h3>{item.question}</h3>
                 <button onClick={changeStyle}>{symbol}</button>
               </div>
               <div className={answerstyle}>
                    <p>{item.answer}</p>
               </div>
           </div>
        )
    })

   return(
       <div className="accordioncontainer">
           {element}
       </div>
   )
}
export default Accordion