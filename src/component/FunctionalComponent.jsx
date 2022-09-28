import React, { useState} from "react";

const FunctionalComponent = () =>{

    const[cont1, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!cont1)
    }

    return(
        <>
        <button onClick={toggleModal} className="funcc">To see styling in Function Component</button>

{cont1 && (
    <div className="cont1">
            <h1>This is created using Function Component</h1>

            <p className="para">Styling  is done using external css</p>
            <p style={{color: 'black', fontWeight: 'bold'}}>This is done using inline css</p>
        </div>
)}
        </>
    )
}

export default FunctionalComponent 