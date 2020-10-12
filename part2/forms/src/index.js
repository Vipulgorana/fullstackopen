import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import axios from "axios"

const Notes = ({ notes }) => {
  const noteList = notes.map((note) => <Note note={note} key={note.id} />);

  return <ul>{noteList}</ul>;
};

const Note = ({ note }) => {
  return (
    <li>
      {note.content} {note.date}
    </li>
  );
};

const ShowImportantNotes = ({ notes, showAll }) => {
  const noteToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return <Notes notes={noteToShow} />;
};

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setnewNote] = useState("a new note");
  const [showAll, setshowAll] = useState(true);

  const handleOnchange = (e) => {
    setnewNote(e.target.value);
  };

  const addNote = (e) => {
    const newNoteObj = {
      content: newNote,
      date: Date(),
      important: Math.random() < 0.5,



    };
    setNotes(notes.concat(newNoteObj));
    console.log("form submitted", newNoteObj);
    e.preventDefault();
  };

  const showAllClicked = () => {
    setshowAll(!showAll);
    console.log(showAll);
  };

  return (
    <div>
      <h1>Hello</h1>
      <Notes notes={notes} />
      <form onSubmit={addNote}>
        <input onChange={handleOnchange} />
        <button>Submit</button>
      </form>
      <button onClick={showAllClicked}>Showall Important Notes</button>
      <ShowImportantNotes notes={notes} showAll={showAll} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
