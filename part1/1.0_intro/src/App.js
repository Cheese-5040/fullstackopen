import React, { useState } from "react"; //import useState function


//derfine display component 
const Display = props => <div> {props.value}</div>

//define button component 
const Button = (props) =>(
        <button onClick= {props.handleClick}>{props.text}</button>
    )


const App =()=>{
    const [value, setValue] = useState(10)
    
    const hello =(who)=>()=>{ //return funciton in function, same as return ()=>console.log()
        console.log('hello',who)
    }
    const setToValue = (newValue) =>{ //setToValue function , take in newValue
        setValue(newValue);
        console.log(value)
    }
    // never define components inside another component
    // const dispaly = props => <div>{props.value}</div>
    return(
        <div>
            <Display value = {value} />
            {/* need to use arrow function since we need onClick to call a function and only reference to arrow function is set to event handler */}
            <button onClick={()=>setValue(0)}>reset to zero</button>
            {/* buttons get their individualised event handlers using function in function  */}
            <Button handleClick={()=> setToValue(1000)} text = "thousand"/>
            <Button handleClick={()=> setToValue(0)} text = "reset"/>
            <Button handleClick={()=> setToValue(value+1)} text = "increment"/>

        </div>
    )
}




export default App