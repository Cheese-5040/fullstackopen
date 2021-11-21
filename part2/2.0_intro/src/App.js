import React from 'react'

const App = ({notes}) => { //we are only interested in notes so we destructure it 
  // why is my life so sien, so many thinfs to do 
  console.log("notes is ", notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        this works as well
        {notes.map((note)=>
        <li key = {note.id}>
          {note.content}
          </li> 
          )}
      </ul>
    </div>
  )
}

export default App