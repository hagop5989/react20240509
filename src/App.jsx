import React, { useState } from "react";

function MyComp() {
  let val = 0;
  function increment() {
    val++;
    console.log("val", val);
  }
  return (
    <div>
      {val}
      <button onClick={increment}>증가</button>
    </div>
  );
}

function MyComp2() {
  // react component 는 상태(state)가 바뀌면 다시 그려짐
  // 각 component 의 state 는 react 가 관리

  // useState 함수는 배열을 리턴
  // 첫번째 원소 (o index) : 상태값
  // 두번째 원소 (1 index) : 상태를 업데이트 하는 함수
  // useState 의  파라미터로 초기값 전달
  const [val, setVal] = useState(0);

  function increment() {
    setVal(val + 1);
  }

  return (
    <div>
      {val}
      <button onClick={increment}>증가</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;
