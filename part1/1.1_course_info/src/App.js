import React from "react";
class Person{
  constructor(name, age){
    this.name = name 
    this.age = age
  }
  greet(){
    console.log("hello, my name is " + this.name)
  }
}

const Part = (object) => {
  return (
    <>
      <p>
        {object.name} {object.exercises}
      </p>
    </>
  );
};
const Header = (object) => {
  return (
    <>
      <h1>{object.name} </h1>
    </>
  );
};

const Content = (object) => {
  return (
    <>
      <Part name={object.parts[0]["name"]}exercises={object.parts[0]["exercises"]} />
      <Part name={object.parts[1]["name"]}exercises={object.parts[1]["exercises"]} />
      <Part name={object.parts[2]["name"]}exercises={object.parts[2]["exercises"]} />
    </>
  );
};

const Total = (object) => {
  return (
    <p>
      Number of exercises {" "}
      {object.parts[0].exercises + object.parts[1].exercises + object.parts[2].exercises}
    </p>
  );
};
const App = () => {
  const Chee = new Person("Chee Seng", 21)
  Chee.greet()
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
