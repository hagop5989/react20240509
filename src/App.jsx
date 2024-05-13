import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(e) {
    console.log("변경됨");
    console.log(e.target.value);
    return setText(e.target.value);
  }

  return (
    <div>
      {/*이벤트 props 에 넣는 함수는 handle xxx 라고 정함*/}
      <input type="text" onChange={handleUpdateText} />
      <p>{text}</p>
    </div>
  );
}

export default App;
