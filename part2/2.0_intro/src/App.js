import React from 'react'

const App = (props) => {
  const { notes } = props
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        {/* accessing notes directly through index */}
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
      <ul>
        this works as well
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
    </div>
  )
}

export default App