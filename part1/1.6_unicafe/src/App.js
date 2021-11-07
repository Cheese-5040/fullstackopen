import React, { useState } from 'react'
const Display = props => <div> {props.value}</div>

//define button component 
const Button = (props) =>(
  <button onClick= {props.handleClick}>{props.text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setGoodToValue = (newValue) =>{ //setToValue function , take in newValue
    setGood(newValue);
    console.log(good)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick= {()=>setGoodToValue(good+1)} text = "good" />
      <Display value = {good}/>
    </div>
  )
}

export default App