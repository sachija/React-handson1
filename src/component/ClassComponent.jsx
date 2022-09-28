
import React, {useState} from "react";

const ClassComponent = () =>{

const[cont2, setcont2] = useState(false);

const togglecont2 = () =>{
    setcont2(!cont2)
}

    return(
        <>
        <button onClick={togglecont2} type="button" className="classcomp">To see styling in Class Component</button>


{cont2 && (

<div className="cont2">
        <h1>This is created using Class Component</h1>
        
        <p className="para">styling is done using external css</p>
        <p style={{color: 'black', fontWeight: 'bold'}}>This is done using inline css</p>
        </div>
        
)}
</>
        
    )
}

export default ClassComponent
