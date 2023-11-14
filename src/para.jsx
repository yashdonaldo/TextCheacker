import React, { useState } from 'react'

function Para() {

const [count, setValue] = useState(new Date().toLocaleTimeString());

const IncNum = ()=>{
    setInterval(() => {
        setValue( new Date().toLocaleTimeString());
    }, 1000);
}
const lossNum = ()=>{
    setValue(new Date().toLocaleDateString())
}
return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}> Click Me</button>
    <button onClick={lossNum}> Date Me</button>
    </>
)

}

export default Para;