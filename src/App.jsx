import React from "react";

function App(props) {
  const names = ["January", "February", "March", "April"];
  // <li>January</li>
  // <li>February</li>
  // <li>March</li>
  // <li>April</li>

  // 배열을 map 메소드를 사용하여 컴포넌트들을 만들 때
  // key prop 을 사용해서 효율성을 높일 것
  // key prop 의 값은 주로 primary key 가 사용됨.
  return (
    <div>
      <ul>
        {/* react 가 key 를 보고 변경 됐는지 여부를 확인함*/}
        {/* key 가 없으면 모든 component 를 보고 값을 비교함*/}
        {/* 보통 db 의 primary key 를 넣어줌*/}
        {/* 같은 key 의 elem 이 안바뀌었으면 DOM 을 update 하지 않음*/}
        {names.map((name, primaryKey) => (
          <li key={primaryKey}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
