import React from 'react'

const Hello = (order) => { //define hello function
  //parse the object props and show its name 
  return (//all react component usually need one root element (div)
    <div> 
      <p> pelita mamak order :  {order.name}, created time is {order.time}</p>
    </div>
  )
}


const App = () => { //arrow fucntion assigned to const variable App
  const createdTime = ()=>{
    const currentTime = new Date().getFullDay()
    return createdTime = props.time 
  }
  const name = "bom"
  const time = 10 
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "roti telur" time = {2+4} />
      <Hello name = {name} time = {time} />
      <p> So {name} were made in {createdTime}</p>
    </div>
  )
}





export default App