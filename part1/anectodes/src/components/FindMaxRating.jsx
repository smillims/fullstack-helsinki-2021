const FindMaxRating = ({ rating, anecdotes }) => {
  const checkDefault = rating.every((elem) => elem === 0);

  if (checkDefault) return null;

  const findMax = rating.indexOf(Math.max(...rating));
  return (
    <div>
      <p>{anecdotes[findMax]}</p>
      <p>has {rating[findMax]} votes</p>
    </div>
  );
};

export default FindMaxRating;
