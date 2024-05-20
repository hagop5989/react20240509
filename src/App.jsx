import React from "react";

function App(props) {
  return (
    <div>
      {/* 파일 전송 시 : method={"post"} encType={"multipart/form-data"} 를 form 에 반드시 설정 해야만 함.*/}
      <form action="/path" method={"post"} encType={"multipart/form-data"}>
        이름 <input type="text" name="name" />
        <br />
        <input type="file" name={"file"} />
        {/* get 으로 보내명 파일 명만 전송됨 */}
        <br />
        <input type="submit" value="제출" />
      </form>
    </div>
  );
}

export default App;
