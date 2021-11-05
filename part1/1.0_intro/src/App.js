import React, { useState } from "react"; //import useState function


const App =()=>{
    const [value, setValue] = useState(10)

    const hello =(who)=>{
        const handleClick=()=>{
            console.log("clicked the ", who)
        }
        return handleClick
    }
    
    
    return(
        <div>
            {value}
            {/* need to use arrow function since we need onClick to call a function and only reference to arrow function is set to event handler */}
            <button onClick={()=>setValue(0)}>reset to zero</button>
            <button onClick = {hello("world")}>button</button>
            <button onClick = {hello("Madam")}>button</button>
            <button onClick = {hello("babi")}>button</button>

        </div>
    )
}




export default App