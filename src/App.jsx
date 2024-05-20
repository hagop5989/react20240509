import React from "react";

function App(props) {
  function handleLinkClick(e) {
    // 기본 이벤트 동작 막기
    e.preventDefault();

    // 개발자가 원하는 동작...
  }

  function handleSubmitClick(e) {
    e.preventDefault();
  }

  return (
    <div>
      <a onClick={handleLinkClick} href="https://www.naver.com">
        네이버
      </a>
      <hr />
      <form action={"https://www.naver.com"} onSubmit={handleSubmitClick}>
        <input type="text" />
        <button>전송</button>
      </form>
    </div>
  );
}

export default App;
