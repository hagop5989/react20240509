import React from "react";
import axios from "axios";

function App(props) {
  // json 데이터 타입
  function handleClick1() {
    const data = {
      name: "son",
      age: 33,
      married: false,
      team: {
        location: "london",
        name: "토트넘",
      },
      item: ["phone", "shoes", "shirt"],
      address: null,
    };
    axios.post("/api/main41/sub5", data);
  }

  function handleClick2() {
    axios.post("/api/main41/sub6", {
      name: "son",
      age: 33,
    });
  }

  function handleClick3() {
    axios.post("/api/main41/sub7", {
      day: new Date().toLocaleString("ko", { weekday: "long" }),
      time: new Date().toLocaleTimeString(),
    });
  }

  // string , number , boolean , object , array , null
  return (
    <div>
      <button onClick={handleClick1}>json 데이터와 요청</button>
      <br />
      <button onClick={handleClick2}>json 데이터와 요청2</button>
      <br />
      <button onClick={handleClick3}>json 데이터와 요청3</button>
    </div>
  );
}

export default App;
