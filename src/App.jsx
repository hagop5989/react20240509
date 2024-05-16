import React from "react";
import axios from "axios";

function App(props) {
  function handle200() {
    axios.get("/api/main43/sub1").then((response) => {
      console.log(response);
    });
  }

  function handle400() {
    axios.get("/api/main43/sub2").catch((err) => {
      console.log(err);
    });
  }

  function handle500() {
    axios.get("/api/main43/sub6").catch((response) => {
      console.log(response);
    });
  }

  function handleErr() {
    axios
      .get("/api/main43/sub8")
      .then(() => console.log("정상 응답 입니다."))
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            console.log("401 에러 입니다.");
            break;
          case 403:
            console.log("403 에러 입니다.");
            break;
          default:
            console.log("기타 에러 입니다." + err.response.status);
        }
      })
      .finally(() => {
        console.log("항상 실행 되는 메소드");
      });
  }

  return (
    <div>
      <button onClick={handle200}>200 응답</button>
      <button onClick={handle400}>400 응답</button>
      <button onClick={handle500}>500 응답</button>
      <button onClick={handleErr}>응답 코드에 따라 다른 일 하기</button>
    </div>
  );
}

export default App;
