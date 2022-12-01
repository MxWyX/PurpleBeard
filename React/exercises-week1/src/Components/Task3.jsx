import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const Task3 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>
        <p>{counter}</p>
      </div>
      <div>
        <Button
          onClick={() =>
            counter === 3 ? setCounter(0) : setCounter(counter + 1)
          }
        >
          Increment
        </Button>
        <Button
          onClick={() =>
            counter === -3 ? setCounter(0) : setCounter(counter - 1)
          }
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Task3;
