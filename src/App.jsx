import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    const obj1 = { name: "son", age: 10 };
    // const json1 = JSON.stringify(obj1); // 자동으로 됨

    // axios 가 두번째 파라미터가 객체면 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  return (
    <div>
      <button onClick={handleClick1}>요청 (json 데이터 포함)</button>
    </div>
  );
}

export default App;
