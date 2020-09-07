import React, { useState } from "react";
import ReactDOM from "react-dom";

const Anecdote = (props) => {
  return (
    <>
      <p>{props.anecdote}</p>
      <p>has {props.vote} votes</p>
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([...props.anecdotes].fill(0));

  const generate = () => {
    const rand = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(rand);
  };

  const addVote = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
  };

  const maxAnec = () => {
    let i = vote.indexOf(Math.max(...vote));
    return props.anecdotes[i];
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} vote={vote[selected]} />
      <Button handleClick={addVote} text="vote" />
      <Button handleClick={generate} text="next anecdotes" />
      <h1>Anecdote with the most votes</h1>
      <Anecdote anecdote={maxAnec()} vote={Math.max(...vote)} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
