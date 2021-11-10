import React, { useState } from 'react'

const Button = ({handleClick, text}) =>{
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)

  const setNewSelected = (newValue) =>{ //setToValue function , take in newValue
    console.log("new index : " , selected);
    setSelected(newValue);//set the new value as selected 
  }

  const voteDote = ()=>{
    const copy = [...votes] //copy all the elements in const array votes
    copy[selected] +=1 //increment counter for the one index selected
    console.log(copy[selected])
    setVotes(copy) // set a votes as the copy array 
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>is index {selected} and has {votes[selected]} votes</p>
      <Button handleClick = {()=>{voteDote()}} text = {"vote"}/>
      <Button handleClick = {()=>{setNewSelected(Math.floor(Math.random()*7))}} text ={"random"} />
    </div>
  )
}

export default App