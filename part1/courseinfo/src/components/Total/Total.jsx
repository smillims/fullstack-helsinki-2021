function Total({ parts }) {
  return <p>Number of exercises is {parts.reduce((total, currentValue) => total + currentValue.exercises, 0)}</p>;
}

export default Total;
