import React from 'react'

const Hello = (order) => { //define hello function
  //parse the object props and show its name 
  return (
    <div> 
      <p> pelita mamak order :  {order.name}, price is {order.price}</p>
    </div>
  )
}


const App = () => { //arrow fucntion assigned to const variable App
  const now = new Date()
  const a = 10 
  const b = 20 
  const name = "nasi lemak"
  const price = 1.5
  console.log('hello form component')
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name = "roti canai" price = {1+2} />
      <p>Hello welcome, it is {now.toString()}</p>
      <p>{a} plus {b} is {a+b}</p>
      <Hello name = "murtabak" price = {5}/>
      <Hello name ={name} price = {price}/>
    </div>
  )
}





export default App