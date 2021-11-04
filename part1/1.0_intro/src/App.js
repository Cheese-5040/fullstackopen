import React, { useState } from "react"; //import useState function

const App = () => {
    //initialize left state and setLeft function to set the state of left
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [clicks, setClicks] = useState({left: 0, right: 0})
  
    const handleLeftClick = ()=> {
        const newClicks = { //set newClicks variable 
            ...clicks,//copy all previous values in clicks
            left : clicks.left +1 //add new state to the application of left and right
            
        }
        setClicks(newClicks)
    }

    const handleRightClick = () => {
        const newClicks = {
            ...clicks,
            right : clicks.right +1
        }
        setClicks(newClicks)
    }
    return (
      <div>
        {clicks.left}
        <button onClick= {handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    )
  }
export default App;