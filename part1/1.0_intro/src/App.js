import React, { useState } from "react"; //import useState function

const History = (props) =>{ //conditional rendering
    if (props.allClicks.length === 0){ //if the length is 0 then return intro tag
        return(
            <div>the app is used by pressing the buttons</div>
        )
    }
    return (
        <div>button press history : {props.allClicks.join(' ')}</div>
    )
}

const Button = ({handleClick, text}) => {
    return( //remember to either use return or round brackets
        <button onClick={handleClick}>
        {text}
        </button>
    )
}

const App = () => {
    //initialize left state and setLeft function to set the state of left
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])//array of states


    
    const handleLeftClick = ()=> {
        setAll(allClicks.concat('L')) //store click in all clicks array as "L"
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat("R"))//store click in all clicks array as "L"
        setRight(right +1)
    }
    return (
      <div>
        {left}
        <Button handleClick= {handleLeftClick} text = 'left'/>
        <Button handleClick={handleRightClick} text ='right'/>
        {right}
        <History allClicks = {allClicks}/> <p>History of all clicks</p>
      </div>
    )
  }
export default App;