import React from 'react'
import Note from "./components/Note"


const App = ({notes}) => { //we are only interested in notes so we destructure it 
  // why is my life so sien, so many thinfs to do 
  console.log("notes is ", notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        this works as well
        {notes.map((note)=>
        <Note key = {note.id} note = {note}/> 
        // key is used to basically label the child in list, for documentation 
          )}
      </ul>
    </div>
  )
}

export default App