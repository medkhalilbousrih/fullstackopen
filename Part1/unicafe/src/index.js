import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ value, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <table>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.all} />
        <Statistic
          text="average"
          value={(props.good - props.bad) / props.all}
        />
        <Statistic text="positive" value={props.good / props.all} />
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const goodVote = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const neutralVote = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const badVote = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodVote} text="good" />
      <Button handleClick={neutralVote} text="neutral" />
      <Button handleClick={badVote} text="bad" />
      <h1>statistics</h1>
      <Statistics bad={bad} neutral={neutral} good={good} all={all} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
