import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Greetings = (props) => {
  const { name, age } = props;
  return (
    <>
      <h1>Hello {name}</h1>
      <h4>you are {age} years old</h4>
    </>
  );
};

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Greetings name="Vipul" age="20" />
    </>
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
