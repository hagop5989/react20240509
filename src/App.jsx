import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [result, setResult] = useState();
  function handleClick1() {
    axios.get("/api/main42/sub1").then((param) => console.log(param.data));
  }

  function handleClick2() {
    axios.get("/api/main42/sub2").then((param) => setResult(param.data));
  }

  function handleClick3() {
    axios.get("/api/main42/sub3").then((res) => console.log(res.data));
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>가위,바위,보</button>
      {result}
      <button onClick={handleClick3}>버튼3</button>
    </div>
  );
}

export default App;
