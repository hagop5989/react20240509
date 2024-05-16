import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    // ajax get 요청
    axios.get("/api/someurl").then((response) => {
      response.data;
    });
  }

  function handleClickButton2() {
    axios.post("/api/someurl");
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
    </div>
  );
}

export default App;
