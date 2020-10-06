import React from "react";
import Parts from "./Parts";

const Header = ({ course }) => {
  const { name, parts } = course;

  return (
    <>
      <h1>{name}</h1>
      <Parts parts={parts} />
    </>
  );
};

export default Header;
