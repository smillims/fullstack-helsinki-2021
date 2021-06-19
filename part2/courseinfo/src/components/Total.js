const Total = ({ parts }) => (
  <p>
    <b>total of {parts.reduce((total, currentValue) => total + currentValue.exercises, 0)} exercises</b>
  </p>
);

export default Total;
