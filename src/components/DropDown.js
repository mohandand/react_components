import React, {useState} from 'react';

const DropDown = ({ companies }) => {

    const [company ,setCompany] = useState(" ");

    const retriveOption = (event) =>{
        console.log(event.target.value);
        setCompany(event.target.value);
    }


    let options = companies.map((item,index)=>{
            return  <option value={item} key={index}>{item}</option>
    })

    return(
        <div className="container">
          <div className="dropdown">
            <label className="dropdownname">Best Companies</label>
            <select name="cars" id="cars" onChange={retriveOption}>
                {options}
            </select>
         </div>
         <div className="displaybox">
             {company}
         </div>
        </div>
    )
}

export default DropDown