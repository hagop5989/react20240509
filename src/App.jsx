import React from "react";
import * as PropTypes from "prop-types";

function MyButton({ name = "클릭" }) {
  const [a, setA] = React.useState(0);
  let count = 0;
  function click() {
    if (count / 2 === 0) {
      setA("구독하기");
    } else {
      setA("구독취소");
    }
    count++;
  }
  return (
    <button onClick={click}>
      {name}
      {a}
    </button>
  );
}

MyButton.propTypes = { name: PropTypes.string };

function App(props) {
  return (
    <div>
      <MyButton name="버튼1 " />
      <MyButton />
    </div>
  );
}

export default App;
