import React, { useState } from "react"; //import useState function


const App =()=>{
    const [value, setValue] = useState(10)

    const hello =(who)=>()=>{ //return funciton in function, same as return ()=>console.log()
        console.log('hello',who)
    }
    const setToValue = (newValue) => () => {
        setValue(newValue)
    }
    
    return(
        <div>
            {value}
            {/* need to use arrow function since we need onClick to call a function and only reference to arrow function is set to event handler */}
            <button onClick={()=>setValue(0)}>reset to zero</button>
            {/* buttons get their individualised event handlers using function in function  */}
            <button onClick = {setToValue(1000)}>thousand</button>
            <button onClick = {setToValue(0)}>reset</button>
            <button onClick = {setToValue(value+1)}>increment</button>

        </div>
    )
}




export default App