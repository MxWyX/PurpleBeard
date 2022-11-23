import React from "react";

function Task2(animals) {
  return (
    <>
      <ul>
        {animals.map((animal) => {
          return <li>animal</li>;
        })}
      </ul>
    </>
  );
}
