import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  function handleClick1() {
    const obj1 = { name: "son", age: 10 };
    // const json1 = JSON.stringify(obj1); // 자동으로 됨

    // axios 가 두번째 파라미터가 객체면 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const obj2 = {
      time: new Date().toLocaleTimeString(),
      day: new Date().toLocaleString("ko", { weekday: "long" }),
    };
    axios.post("/api/main41/sub2", obj2);
  }

  function handleClick3() {
    // const data = {
    //   name : name,
    //   city : city,
    // };
    // const data = {
    //   name ,
    //   city ,
    // }
    axios.post("/api/main41/sub3", { name, city });
  }

  return (
    <div>
      <button onClick={handleClick1}>요청 (json 데이터 포함)</button>
      <button onClick={handleClick2}>요청2 (json 데이터 포함)</button>
      {/*<div>(input+br)*2+button</div>*/}
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>요청 (input 에 입력한 값)</button>
      </div>
    </div>
  );
}

export default App;
