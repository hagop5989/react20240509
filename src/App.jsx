import React from "react";

function App(props) {
  const a = {};
  console.log("a", typeof a);

  const b = []; // 배열 도 객체
  console.log("b", typeof b);

  // 배열 : 여러 값을 순서(index)대로 가지고 있는 객체

  const c = ["son", "lee", "kim", "hwang"];
  console.log("c", c);
  console.log("c-0", c[0]);
  console.log("c-1", c[1]);
  console.log("c-2", c[2]);
  console.log("c-3", c[3]);
  console.log("c-4", c[4]); // undefined

  return (
    <div>
      <ul>
        <li>{c[0]}</li>
        <li>{c[1]}</li>
        <li>{c[2]}</li>
        <li>{c[3]}</li>
      </ul>
    </div>
  );
}

export default App;
