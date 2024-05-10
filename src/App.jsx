import React from "react";

function MyComp({ name, age, someProp, otherProp }) {
  console.log({ name });
  console.log({ age });
  console.log({ someProp }); // true : 값 없이 작성되면 true
  console.log({ otherProp }); // true
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp name="son" age={30} someProp otherProp={true} />
    </div>
  );
}

export default App;
