import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [data, setData] = useState("");
  const [ck, setCk] = useState(true);

  function handleClickButton1() {
    // ajax get 요청
    axios.get("/api/someurl").then((response) => {
      response.data;
    });
  }

  function handleClickButton2() {
    axios.post("/api/someurl");
  }

  function handleClickButton3() {
    axios.get(`/api/someurl2?id=${employeeId}`).then((response) => {
      const data1 = response.data;
      setData(data1);
    });
  }

  function handleClickButton4() {
    axios.post("/api/someurl2");
  }

  function handleClickButton5() {
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "흥민");
    params.append("email", "son@son.com");
    axios.get(`/api/someurl3?${params}`);
  }

  const [employeeId, setEmployeeId] = useState("");

  function handleClickButton6() {
    const params = new URLSearchParams();
    params.append("id", 5);
    params.append("city", "seoul");
    params.append("country", "한국");
    axios.post("/api/someurl3", params); // post 는 body 에 붙어서 나가기에 이렇게 작성
  }

  function handleClickButton7() {
    const params = new URLSearchParams();
    params.append("name", "son");
    params.append("name", "lee");
    params.append("age", 33);
    params.append("country", "한국");
    axios.get(`/api/someurl4?${params}`);
  }

  function handleClickButton8() {
    const params = new URLSearchParams();

    params.append("day", "2024-05-16");
    params.append("time", "오전 10시 25분");
    params.append("dayDetail", "목요일");
    params.append("now", new Date().toLocaleTimeString());
    axios.post("/api/someurl4", params);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>

      <hr />
      <input
        type="checkbox"
        checked={ck}
        onChange={(e) => setCk(e.target.checked)}
      />
      <hr />
      <input type="text" onChange={(e) => setEmployeeId(e.target.value)} />
      <button onClick={handleClickButton3}>get 요청</button>
      {ck && <div>{data}</div>}
      <button onClick={handleClickButton4}>post 요청</button>
      <button onClick={handleClickButton5}>get 요청 with query string</button>
      <button onClick={handleClickButton6}>post 요청 with data</button>
      <button onClick={handleClickButton7}>get 요청 with query string2</button>
      <button onClick={handleClickButton8}>post 요청 with data2</button>
    </div>
  );
}

export default App;
