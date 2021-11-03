import React, { Component, useState } from "react"; //import useState function

const App = () => {
  const [counter, setCounter] = useState(0); // function call of useState, initialised with 0
  //array of two items, assignm counter and setCounter with destructing assignmment
  //usestate returns array with 2 items, then we assign them as two variables, counter, adn setcounter
  //counter is set to 0, and setCounter is assigned to function to modify state

  //   const handleClick = () => {
  //     console.log("clicked");
  //   }
  const increaseByOne = ()=>{setCounter(counter +1)}
  const reset =()=>setCounter(0)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      {/* event handler fucntion onClick */}
      <button onClick={reset}>reset to 0</button>
    </div>
  );
};

export default App;
