import Total from './Total';

const Content = ({ course }) => {
  const { parts } = course;

  return (
    <>
      {parts.map((part) => (
          <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
      <Total parts={parts} />
    </>
  );
};

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

export default Content;
