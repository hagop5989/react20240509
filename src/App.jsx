import React, { useState } from "react";

function MyButton({ onClick }) {
  return <button onClick={onClick}>클릭</button>;
}

function MyNumber({ number }) {
  return <div>nubmer : {number}</div>;
}

// 하위 컴포넌트의 상태와 이벤트를 상위 컴포넌트에서 관리 할 수 있다.
// 이 때 props 사용해서 이벤트핸들러메소드와 상태를 전달해 줌.
function App(props) {
  // 2개의 컴포넌트간 주고 받는 경우 상위컴포넌트에 존재
  const [number, setNumber] = useState(0);

  function handleNumberChange() {
    setNumber(number + 1);
  }

  return (
    <div>
      <MyButton onClick={handleNumberChange} />
      <MyNumber number={number} /> {/*props 으로 받음*/}
    </div>
  );
}

export default App;
