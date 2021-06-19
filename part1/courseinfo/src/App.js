import React from "react";
import Course from "./components/Course";


function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return <Course course={course} />
  //(
  //  <div>
  //    <Header course={course.name} />
  //    <Content parts={course.parts} />
  //    <Total parts={course.parts} />
  //  </div>
  //);
}

export default App;
