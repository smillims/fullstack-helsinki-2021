import Content from "./Content";
import Header from "./Header";
import MainHeader from "./MainHeader";

const Course = ({ courses }) => {
  return (
    <>
      <MainHeader text="Web development curriculum" />
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
