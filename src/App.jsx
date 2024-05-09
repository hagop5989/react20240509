import React from "react";

function App(props) {
  const son = {
    firstName: "son",
    lastName: "흥민",
    address: "서울",
    country: "한국",
    married: true,
  };
  return (
    <div>
      <ul>
        <li>성 : {son.firstName}</li>
        <li>이름 : {son.lastName}</li>
        <li>주소 : {son.address}</li>
        <li>국가 : {son.country}</li>
        <li>결혼 : {son.married ? "기혼" : "미혼"}</li>
      </ul>
    </div>
  );
}

export default App;
