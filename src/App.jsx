import React from "react";

function MyButton({ name, sx }) {
  return (
    <button onClick={() => console.log("clicked!!")} style={sx}>
      {name}{" "}
    </button>
  );
}

function App(props) {
  return (
    <div>
      <MyButton
        name={"버튼1"}
        sx={{
          backgroundColor: "black",
          color: "white",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      />
      <MyButton
        name={"버튼2"}
        sx={{
          backgroundColor: "lightblue",
          color: "white",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      />
    </div>
  );
}

export default App;
