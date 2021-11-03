import React, { useState } from "react"; //import useState function

//display component
const Display = ({ counter }) => <div> diaplaying {counter}</div>;

//button component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0); // function call of useState, initialised with 0
  //array of two items, assignm counter and setCounter with destructing assignmment
  //usestate returns array with 2 items, then we assign them as two variables, counter, adn setcounter
  //counter is set to 0, and setCounter is assigned to function to modify state

  //   const handleClick = () => {
  //     console.log("clicked");
  //   }
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  return (
    <div>
      {/*  send counter value to child display */}
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      {/* if clicked call the increaseByOne function */}
      <Button onClick={reset} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
};

export default App;
