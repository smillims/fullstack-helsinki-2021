function Total({ course }) {
  return <p>Number of exercises is {course.parts.reduce((total, currentValue) => total + currentValue.exercises, 0)}</p>;
}

export default Total;
