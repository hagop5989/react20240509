import React from "react";

function App(props) {
  // style props

  return (
    <div>
      {/* style property 는 객체를 줘야함{}*/}
      <div
        style={{
          color: "lightcoral",
          padding: "10px",
          border: "2px dotted green",
          textAlign: "center",
          backgroundColor: "aqua",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </div>
  );
}

export default App;
