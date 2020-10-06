  import React, { useState } from "react";
  import ReactDOM from "react-dom";
  import "./index.css";
  import * as serviceWorker from "./serviceWorker";

  const Button = ({ text, handleClick }) => {
    return (
      <>
        <button onClick={handleClick}>{text}</button>
      </>
    );
  };

  const Statistic = ({ text, value }) => {
    console.log(text, value);
    return (
      <>
        <tr>
          <td>{text}:</td>
          <td>{value}</td>
        </tr>
      </>
    );
  };

  const Statistics = ({ good, bad, neutral }) => {
    const totalReview = good + bad + neutral;

    const stats =
      totalReview > 15 ? (
        <>
          <table border="1">
            <tbody>
              <Statistic text="good" value={good} />
              <Statistic text="neutral" value={neutral} />
              <Statistic text="bad" value={bad} />
              <Statistic text="Total review" value={totalReview} />
              <Statistic text="Positve" value={(good / totalReview) * 100} />
              <Statistic text="Negative" value={(bad / totalReview) * 100} />
            </tbody>
          </table>
        </>
      ) : (
        <h4>"No feed back given"</h4>
      );

    return (
      <>
        <h1>Statistics</h1>
        {stats}
      </>
    );
  };

  const App = () => {
    const [good, setGood] = useState(5);
    const [neutral, setNeutral] = useState(8);
    const [bad, setBad] = useState(2);

    const handleGoodIncrement = () => {
      setGood(good + 1);
    };

    const handleNeutralIncrement = () => {
      setNeutral(neutral + 1);
    };
    const handleBadIncrement = () => {
      setBad(bad + 1);
    };

    return (
      <div>
        <h1>Please Give feedback</h1>
        <Button text="Good" handleClick={handleGoodIncrement} />
        <Button text="Neutral" handleClick={handleNeutralIncrement} />
        <Button text="Bad" handleClick={handleBadIncrement} />
        <Statistics good={good} neutral={neutral} bad={bad} />
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
