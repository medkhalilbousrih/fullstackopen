import React from "react";

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};


const Content = (props) => {
  return (
    props.parts.map(part => <Part part={part} key={part.id}/>)
  );
};

const Total = (props) => {
	const sum = props.parts.reduce((acc,curr) => {
		return acc + curr.exercises;
	},0);
  return (
    <p>
      total of {sum}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  );
};

export default Course;
