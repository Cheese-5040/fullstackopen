import React from 'react'

const Hello = (order) => { //define hello function
  //declaration of variables
  const name = order.name
  const age = order.age
  //helper function to return year born of onjects
  const createdTime = ()=>{
    const currentTime = new Date().getFullYear()
    return currentTime - age
  }

  //same helper function but use arrow function
  const bornYear = () => { return new Date().getFullYear() - age}
  const bornYear2 = () => new Date().getFullYear() - age //same as above



  return (//all react component usually need one root element (div)
    <div> 
      <p> Hello {name} you are {age} years old </p>
      <p> So you are probably born at {bornYear()} or {bornYear2()} or {createdTime()}</p>
    </div>
  )
}


const App = () => { //arrow fucntion assigned to const variable App
  
  const name = "bom"
  const time = 10 
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = "roti telur" age = {2+4} />
      <Hello name = {name} age = {time} />
    </div>
  )
}





export default App