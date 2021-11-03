import React, { Component, useState } from 'react'  //import useState function 

const App = () => {
  const [ counter, setCounter ] = useState(0) // function call of useState, initialised with 0
  //array of two items, assignm counter and setCounter with destructing assignmment 
  //usestate returns array with 2 items, then we assign them as two variables, counter, adn setcounter
  //counter is set to 0, and setCounter is assigned to function to modify state

  setTimeout(//delay of 1000 miliseconds = 1 second 
    () => setCounter(counter + 1), //setcounter is funciton that modify the state
    1000 //one second
  )
//   after setCounter is ChannelSplitterNode, react re-renders the Component, function body of component get re-executed
// execute again means calling setTimeout function again, increment counter
//old value of counter is rendered on screen 
console.log("rendering ", counter)
  return (
    <div>{counter}</div>
  )
}

export default App