import React from "react";

function MyComp(props) {
  return <div></div>;
}
function App(props) {
  // props 의 이름은 lowerCamelCase 로 작성
  // 예약어를 쓰지 말 것 ( let={5} const ={5} ... )

  return (
    <div>
      <label htmlFor="input1">name</label>
      <input id="input1" type="text" />
      <p className="error note">Lorem ipsum dolor sit amet.</p>
      <MyComp number={3} pageNumber={3} let={5} const={5} />
    </div>
  );
}

export default App;
