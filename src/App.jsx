import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [result, setResult] = useState();
  function handleClick1() {
    axios.get("/api/main42/sub1").then((param) => console.log(param.data));
  }

  function handleClick2() {
    changeStyle();
    axios.get("/api/main42/sub2").then((param) => setResult(param.data));
  }

  function handleClick3() {
    axios.get("/api/main42/sub3").then((res) => console.log(res.data));
  }

  function handleClick4() {
    axios.get("/api/main42/sub4").then((응답) => console.log(응답.data));
  }

  function handleClick5() {
    axios.get("/api/main42/sub5").then((res) => console.log(res.data));
  }

  const [color, setColor] = useState("");

  function changeStyle() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return setColor(color);
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>가위,바위,보</button>
      <div style={{ backgroundColor: color }}>{result}</div>
      <button onClick={handleClick3}>버튼3</button>
      <br />
      <button onClick={handleClick4}>json 응답받기</button>
      <br />
      <button onClick={handleClick5}>JSON 응답 받기</button>
    </div>
  );
}

export default App;
