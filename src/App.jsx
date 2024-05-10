import React from "react";

function App(props) {
  function click1() {
    console.log("click1");
  }
  const arrow = () => {
    console.log("arrow");
  };
  const a = function () {
    console.log("이름없음");
  };

  return (
    <div>
      <button onClick={click1}>
        click1 onClick property에 이름 있는 함수 넣기
      </button>
      <button onClick={a}>click2 onClick property에 이름 없는 함수 넣기</button>
      <button
        onClick={function () {
          console.log("이름없는 함수 바로 넣기");
        }}
      >
        click3 onClick property에 이름 없는 함수 바로넣기
      </button>
      <button onClick={arrow}>
        click4 onClick property에 arrow function 변수에 담아서 넣기
      </button>
      <button
        onClick={() => {
          console.log("arrow 바로 넣기");
        }}
      >
        click5 onClick property에 arrow function 바로 넣기
      </button>
    </div>
  );
}

export default App;
