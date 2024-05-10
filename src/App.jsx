import React from "react";
import * as PropTypes from "prop-types";

function MyButton(props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  );
}

MyButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

function App(props) {
  return (
    <div>
      <MyButton name={"샾 출력"} onClick={() => console.log("####")} />
      <MyButton name={"느낌표 출력"} onClick={() => console.log("!!!!")} />
    </div>
  );
}

export default App;
