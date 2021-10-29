import React from "react";

const Part = (content) =>{
  return(
    <>
      <p>
        {content.details} {content.number}
      </p>
    </>
  );
};
const Header = (course) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Content = (parts)=>{
  return(
    <>
      <Part details = {parts.part1} number = {parts.exercises1}/>
      <Part details = {parts.part2} number = {parts.exercises2}/>
      <Part details = {parts.part3} number = {parts.exercises3}/>
    </>
  );
};

const Total = (total) =>{
  return(
    <p>Number of exercises {total.exercises1 + total.exercises2 + total.exercises3}</p>
  )
};
const App = () => {
  const course = 'Half Stack application development'
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header name={course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  );
};

export default App;
