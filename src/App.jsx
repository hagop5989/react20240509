import React from "react";

function App(props) {
  // object
  const a = {
    name: "John",
  };

  const b = a;

  console.log(a.name);
  console.log(b.name);

  b.name = "Jane";

  console.log(a.name);
  console.log(b.name);

  return <div></div>;
}

export default App;
