import React from 'react';

const Accordion = ({questions}) => {

    let element = questions.map((item,index)=>{
        return(
            <div className='element' key={index}>
               <div clasName="question">
                 <h3>{item.question}</h3>
                 <button><i class="fas fa-plus-circle"></i></button>
               </div>
               <div className="answer">
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