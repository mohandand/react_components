import React from 'react';

const Accordion = () => {


   return(
       <div className="accordioncontainer">
           <div className='element'>
               <div clasName="question">
                 <h3>About this site ?</h3>
                 <button><i class="fas fa-plus-circle"></i></button>
               </div>
               <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
               </div>
           </div>
       </div>
   )
}
export default Accordion