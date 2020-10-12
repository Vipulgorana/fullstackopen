import React from 'react';

const Notes = ({notes,toggleImportance}) =>{
  let notesList = notes.map((note)=>{
    return(<p key={note.id}>{note.content} <button onClick={() =>toggleImportance(note.id)}>Toggle Importance</button></p>)
  })
  return(
  <>{notesList}</>
  )
}

export default Notes