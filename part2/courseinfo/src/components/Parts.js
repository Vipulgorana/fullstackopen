import React from "react";
import Part from "./Part";

const Parts = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  const partList = parts.map((part) => {
    return <Part name={part.name} exercises={part.exercises} key={part.id} />;
  });

  return (
    <>
      {partList} <h3>Total exercises are : {total}</h3>
    </>
  );
};

export default Parts;
