import Total from "./Total";

function Content({ course }) {
  return (
    <>
      {course.parts.map((item) => (
        <Part part={item.name} exercises={item.exercises} key={item.exercises} />
      ))}
      <Total course={course} />
    </>
  );
}

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

export default Content;
