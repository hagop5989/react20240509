import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("/api/main43/sub1").then((response) => {
      console.log("200응답");
    });
  }

  function handleClick400() {
    axios
      .get("/api/main43/sub2")
      .then((response) => console.log("400응답"))
      .catch(() => console.log("400응답 catch"));
  }

  function handleClick404() {
    axios
      .get("/api/main43/sub5")
      .then()
      .catch(() => console.log("404응답"));
  }
  function handleClick500() {
    axios
      .get("/api/main43/sub6")
      .then()
      .catch(() => console.log("500응답"));
  }

  return (
    <div>
      <button onClick={handleClick200}>200 응답</button>
      <button onClick={handleClick400}>400 응답</button>
      <button onClick={handleClick404}>404 응답</button>
      <button onClick={handleClick500}>500 응답</button>
    </div>
  );
}

export default App;
