import React, { useState } from 'react'
const Display = props => <p> {props.text}{props.value}{props.symbol}</p>

//define button component 
const Button = (props) =>(
  <button onClick= {props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  return(
      <>
      <Display value = {props.all} text ={"all : "}/>
      <Display value = {(props.good -props.bad)/props.all} text ={"average : "}/>
      <Display value = {props.good/props.all * 100} text ={"positive : "} symbol = {"%"}/>
      </>
  )
}
const History = (props) => {
  if (props.all === 0){
    return(
      <div>
        No Feedback Given
      </div>
    )
  }
  return(
    <>
    <table>
      <tr>
        <td>good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>all</td>
        <td>{props.all}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{(props.good -props.bad)/props.all}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{props.good/props.all * 100}%</td>
      </tr>
    </table>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const setGoodToValue = (newValue) =>{ //setToValue function , take in newValue
    console.log("good : " , good);
    setGood(newValue);
  }
  const setNeutralToValue = (newValue) =>{ //setToValue function , take in newValue
    console.log("neutral : " , neutral);
    setNeutral(newValue);
  }
  const setBadToValue = (newValue) =>{ //setToValue function , take in newValue
    console.log("bad : " , bad);
    setBad(newValue);
  }
  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick= {()=>setGoodToValue(good+1)} text = "good" />
      <Button handleClick= {()=>setNeutralToValue(neutral+1)} text = "neutral" />
      <Button handleClick= {()=>setBadToValue(bad+1)} text = "bad" />
      <h1>Statistics</h1>
      <History all = {all} good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App