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
      <h1>{course.name} </h1>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises : 10 
  }
  const part2 = {
    name = 'Using props to pass data', 
    exercises : 7
  }
  const part3 = {
    name = "state of a component " , 
    exercises : 14
  }

  return (
    <div>
      <Header name={course} />
      <Content part1 = {part1.name} part2 = {part2.name} part3 = {part3.name} exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}/>
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}/>
    </div>
  );
};

export default App;
