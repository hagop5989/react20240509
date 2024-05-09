import React from "react";

function App(props) {
  const foodList = ["pizza", "burger", "noodle", "coffee"];

  return (
    <>
      <div>
        <ul>
          {foodList.map((food) => (
            <li>{food}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
