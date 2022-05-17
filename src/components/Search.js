import React,{ useState } from 'react';


//Importing countries Json file
let Data = require('./countries.json');
let result=[];

const Search = () => {

    const [country ,setCountry] = useState("");
    const [selectedcountry ,setSelectedCountry] = useState("");

    const getValue = (event) => {
            event.preventDefault();
            setCountry(event.target.value);
            
    }

    const diplayValue = (event) => {
        event.preventDefault();
        setSelectedCountry(event.target.value)
        console.log(selectedcountry);
    }

    if(country.length>2){
        
        result=Data.filter((item) => {
         return item.toLowerCase().includes(country.toLowerCase())
        })

        console.log(country)
    }
    

    let count=0;
    return(
        <div className="smallcontainer">
            <div className="searchbox">
                <input onChange={getValue}></input>
                <button className="searchbutton">Search</button>
            </div> 
            <div className="searchdisply">
                {
                    result.map((item ,index) => {
                        count++;
                        if(count<5 ){
                            return(
                                <div key={index} className="searchresults"  data-value={item} onClick={diplayValue}>
                                <span>{item}</span><br></br>
                               </div>
                            )
                        }

                    })
                }
            </div>
            <div>
            </div>
        </div>
    )
}

export default Search;