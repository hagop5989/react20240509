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

  const [employeeId, setEmployeeId] = useState("");

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
    </div>
  );
}

export default App;
