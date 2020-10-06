import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const Anecdotes = ({ selected, anecdotes }) => {
  return (
    <>
      <h2>Today's quotes</h2>
      <h3>{anecdotes[selected]}</h3>
    </>
  );
};

const Button = ({ text, task }) => {
  return <button onClick={task}>{text}</button>;
};

const MaxVoted = ({ anecdotes, points }) => {
  console.log(points);
  console.log(Array.isArray(points));
  const temp = points.indexOf(Math.max(...points));
  if (temp === 0) {
    return <h2>No Votes Yet</h2>;
  }
  return (
    <>
      <h2>Post With most votes is:</h2>
      <h3>{anecdotes[temp]}</h3>
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([1, 5, 7, 8, 9, 10, 7]);
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const handleGeneration = () => {
    const randomIndex = Math.abs(Math.floor(Math.random() * 10 - 4));
    setSelected(randomIndex);
    console.log(randomIndex);
  };

  const handleVoting = () => {
    const copyPoint = [...points];
    copyPoint[selected] += 1;
    setPoints(copyPoint);
  };

  return (
    <div>
      <MaxVoted anecdotes={anecdotes} points={points} />
      <Anecdotes selected={selected} anecdotes={anecdotes} />
      <h4>has {points[selected]} votes</h4>
      <Button text="Next" task={handleGeneration} />
      <Button text="Vote" task={handleVoting} />
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
