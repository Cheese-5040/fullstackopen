import React from 'react'

const App = (props) => {
  const { notes } = props
  // why is my life so sien, so many thinfs to do 
  console.log("notes is ", notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        this works as well
        {notes.map(note => 
        <li key = {note.id}>
          {note.content} 
          {/* render a code snippet */}
          </li>
          )}
      </ul>
    </div>
  )
}

export default App