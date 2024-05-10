import React from "react";

function App(props) {
  function action1() {
    console.log("action 1");
  }

  const action2 = function () {
    console.log("이름없는 액션");
  };

  action1();
  return (
    <div>
      <button onClick={action1}>클릭!</button>
      <button onClick={action2}>클릭2!</button>
      <button
        onClick={function () {
          console.log("anonymous action ###");
        }}
      >
        클릭#
      </button>
    </div>
  );
}

export default App;
