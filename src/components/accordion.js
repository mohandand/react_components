import React, {useState} from 'react';

const Accordion = ({questions}) => {

    const [isActive, setIsActive] = useState("true");



    let element = questions.map((item,index)=>{
        return(
            <div className='element' key={index}>
               <div className="question">
                 <h3>{item.question}</h3>
                 <button onClick={() => setIsActive(!isActive)}>{isActive ? '-' : '+'}</button>
               </div>
               {isActive &&
               <div className="answer">
                    <p>{item.answer}</p>
               </div>
               }
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