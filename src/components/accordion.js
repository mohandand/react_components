import React, {useState} from 'react';

const Accordion = ({title , content , index}) => {

    const [isActive, setIsActive] = useState(false);

   return(
        <div>
          <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
            <h3>{title}</h3>
            <button className="expand">{isActive ? '-' : '+'}</button>
          </div>
           { isActive ? <div className="accordion_content">{content}</div> : <></>}
       </div>
   )
}
export default Accordion