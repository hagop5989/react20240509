import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("axios 로 파일 전송");
    // axios.post("/api/main45/sub1", {}, {});
    axios.postForm("/api/main45/sub2", {
      name: name,
      file: file,
    });
  }

  const fileNames = [];
  for (let i = 0; i < file.length; i++) {
    fileNames.push(<li>{file.item(i).name}</li>);
  }
  return (
    <div>
      {/* 파일 전송 시 : method={"post"} encType={"multipart/form-data"} 를 form 에 반드시 설정 해야만 함.*/}
      <form onSubmit={handleSubmit}>
        이름{" "}
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          multiple={true}
          type="file"
          name={"file"}
          onChange={(e) => setFile(e.target.files)}
        />
        {/*value 를 쓰면 파일명만 잡힘*/}
        {/* get 으로 보내명 파일 명만 전송됨 */}
        <br />
        <input type="submit" value="제출" />
        <div>
          <ul>{fileNames}</ul>
        </div>
      </form>
    </div>
  );
}

export default App;
