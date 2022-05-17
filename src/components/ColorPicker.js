import React, {useState} from "react"

const ColorPicker = ({colors}) => {

    const [col, setCol] = useState("white")

    const setColor= (event) => {
        setCol(event.target.value);
    }

    const colorlist = colors.map((color,index) => {
            return <button key={index} className="colors" value={color} style={{backgroundColor:`${color}`}} onClick={setColor}/>
    })
   
    return(
        <div className="smallcontainer">
            <div className="colorbox" style={{backgroundColor:`${col}`}} >
            </div>
            <div className="colorslist">
                {colorlist}
            </div>
        </div>
    )
}

export default ColorPicker
