import React, { createContext, useContext, useState } from "react";

// step : 컨텍스트 만들기
let TextContext = createContext(null);

function MyInput() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => textHandler.updateText(e.target.value)}
      />
      <p>MyInput : {textHandler.text}</p>
    </div>
  );
}

function MyText() {
  const textHandler2 = useContext(TextContext);
  return (
    <div>
      <p>MyText : {textHandler2.text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(t) {
    setText(t);
  }

  return (
    <div>
      <TextContext.Provider value={{ text, updateText: handleUpdateText }}>
        <MyInput />
        <MyText />
      </TextContext.Provider>
    </div>
  );
}

export default App;
