function Content({ parts }) {
  return (
    <div>
      {parts.map((item) => (
        <Part part={item.name} exercises={item.exercises} key={item.exercises} />
      ))}
    </div>
  );
}

function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}

export default Content;
