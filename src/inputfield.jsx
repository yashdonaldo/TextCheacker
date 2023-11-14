import React, { useState } from "react";

function Input() {
    const [name, iname] = useState();
    const [fullname, setName] = useState();
    console.log(fullname)

    const change = (Event)=>{
        iname(Event.target.value)
    }
    const onSubmits = (event)=>{
        event.preventDefault()
        setName(name)
    };
    return(
        <>
            <div className="bgchange">
                <h1>Hello {fullname}</h1>
                <form action="" onClick={onSubmits}>
                <input type="text" placeholder="Enter Your Name" onChange={change} value={name} />
                <button >Submit</button>
                </form>
            </div>
        </>
    )

}
export default Input