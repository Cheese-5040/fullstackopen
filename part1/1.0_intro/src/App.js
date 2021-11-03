import React, { Component, useState } from "react"; //import useState function

const App = () => {
  const [counter, setCounter] = useState(0); // function call of useState, initialised with 0
  //array of two items, assignm counter and setCounter with destructing assignmment
  //usestate returns array with 2 items, then we assign them as two variables, counter, adn setcounter
  //counter is set to 0, and setCounter is assigned to function to modify state

  const handleClick = () => {
    console.log("clicked");
  }
  return (
      <div>
          <div>
              {counter}
          </div>
          <button onClick = {handleClick}>
              plus
          </button>
      </div>
  )
};

export default App;
