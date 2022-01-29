import React from "react";

const Header = ({ tasksLength, appTitle }) => {
  return (
    <div>
      <h1>{appTitle}</h1>
      <h2>{`There is ${tasksLength} task(s) in the list`}</h2>
    </div>
  );
};

export default Header;
