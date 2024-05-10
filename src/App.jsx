import React from "react";

// 첫 번째 파라미터로 객체가 들어옴 (props)
function MyComp(props) {
  console.log(props);
  return (
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>address: {props.address}</p>
      <p>city: {props.city}</p>
      <p>country: {props.country}</p>
    </div>
  );
}

function App(props) {
  // html 은 attribute react 는 property
  return (
    <div>
      <MyComp name="son" age={33} address="seoul" />
      <MyComp city="busan" country="USA" />
    </div>
  );
}

export default App;
