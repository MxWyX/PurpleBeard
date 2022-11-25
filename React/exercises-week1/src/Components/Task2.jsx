import React from "react";

function Task2({ animals }) {
  return (
    <>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </>
  );
}

export default Task2;
