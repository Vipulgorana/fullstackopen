import React, { useState, useEffect } from "react";
import Notes from "./Components/Notes"
import Form from "./Components/Form"
import Services from "./Services"


function App() {
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState();
  const [showAll, setShowAll] = useState();


  useEffect(() => {
    console.log("effect");
    Services
    .getAll()
      .then((intialNotes) => {
        setNotes(intialNotes);
      })
  }, []);

  console.log("render", notes.length, "notes");

  const newNote = (e) =>{
    setNewNotes(e.target.value)
  }

  const addNote = (e) =>{
    const noteObj = {
      content:newNotes, 
      date:Date(),
      important:Math.random() < 0.5
    }
    Services
    .create(noteObj)
      .then((returnedNote)=>{setNotes(notes.concat(returnedNote))})
    e.preventDefault();
  }

  const toggleImportance = (id) =>{
    console.log("importance of ",id," to be toggeled");
    const note = notes.find((n)=>n.id===id);
    const changedNote = {...note,important: !note.important}
    Services
    .update(id,changedNote)
      .then((updatedNote)=>{
        setNotes(notes.map((note)=>note.id !== id ? note : updatedNote));
      })
      .catch((err)=>{
        alert(`the note "${note.content}" is already deleted from server`);
        setNotes(notes.filter((n)=>n.id !== id));
      })
  }

  return (
    <div className="App">
      <h1>Program</h1>
      <Notes notes={notes} toggleImportance={toggleImportance} />
      <Form input={newNote} sub={addNote}  />
    </div>
  );
}

export default App;
