import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 두번째 파라미터가 없는 경우는 없다고 봐도됨
    console.log("mount 될 때");
  }, []);

  useEffect(() => {
    // 여기서 count 를 변경하면 안됨
    console.log("count 가 변경 될 때");
    // setCount(count + 1); ->무한 루프가 됨, count 가 변할때 실행되는 것인데 count 를 변경시키므로
    // dependency 가 변경되지 않도록
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default App;
