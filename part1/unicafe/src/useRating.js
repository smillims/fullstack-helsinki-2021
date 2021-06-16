import { useState } from "react";

const useRating = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const rating = [
    {
      quality: good,
      setQuality: setGood,
      textQuality: "good",
    },
    {
      quality: neutral,
      setQuality: setNeutral,
      textQuality: "neutral",
    },
    {
      quality: bad,
      setQuality: setBad,
      textQuality: "bad",
    },
  ];

  function sumAllRating() {
    if (good === 0 && neutral === 0 && bad === 0) {
      return "";
    }

    return good + neutral + bad;
  }

  const arr = [];

  function checkAverage() {
    for (let i = 1; i <= good; i++) {
      arr.push(1);
    }
    for (let i = 1; i <= neutral; i++) {
      arr.push(0);
    }
    for (let i = 1; i <= bad; i++) {
      arr.push(-1);
    }

    if (good === 0 && neutral === 0 && bad === 0) {
      return "";
    } else {
      const arrReduce =
        arr.reduce((total, item) => {
          return total + item;
        }, 0) / arr.length;

      return arrReduce;
    }
  }

  function checkPositive() {
    if (good === 0 && neutral === 0 && bad === 0) {
      return "";
    }

    return (100 * good) / (arr.length / 2);
  }

  return {
    rating,
    sumAllRating,
    checkAverage,
    checkPositive,
  };
};

export default useRating;
