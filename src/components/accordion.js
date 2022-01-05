import React, {useState} from 'react';

const Accordion = ({title , content , index}) => {

    const [isActive, setIsActive] = useState(false);

   return(
        <div>
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
           { isActive ? <div className="accordion-content">{content}</div> : <></>}
       </div>
   )
}
export default Accordion