import React, { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [rating, setRating] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0));
  const handleClick = (max) => setSelected(Math.floor(Math.random() * max));
  const incrementRating = () => {
    const test = [...rating];
    test[selected] += 1;
    setRating([...test]);
  };
  function checkMostVotes() {
    return rating.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }

  //function checkMostVotes() {
  //  for (let i = 0; i < rating.length; i++) {
  //    if (rating[i] !== 0) {
  //      return anecdotes[i];
  //    }
  //  }
  //}

  return (
    <>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <button onClick={() => incrementRating()}>vote</button>
      <button onClick={() => handleClick(anecdotes.length)}>next anectode</button>
      <Header text="Anecdote with the most votes" />
      <p>{checkMostVotes()}</p>
    </>
  );
};

export default App;
