import React, { useState } from "react";

function Bgchange(){

    const color = "black"
    const [bgcolor , newcolor] = useState(color)
    const [name , newname] = useState("Click Me")

    const background = ()=>{
        let color2 = "pink"
        newcolor(color2)
        newname("Ouch!!😘💏💋💘")
    }
    const bgback = ()=>{
        newcolor(color)
        newname("Click Me")
    }
    return(
        <>
            <div style={{background: bgcolor}} className="bgchange">
            <button onClick={background} onDoubleClick={bgback}>{name} </button>
            </div>
        
        </>
    )
}
export default Bgchange;