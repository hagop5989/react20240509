function App() {
  const myTag = <h1>hello</h1>;
  const var1 = "흥민";
  const var2 = 3.14;
  const var3 = 456;
  const var4 = true;
  const var5 = false;
  const var6 = null;
  const var7 = undefined;
  const var8 = [2, 3];
  const var9 = { age: 3, name: "강인" };
  // const, let 중에 사용

  // jsx 내에서 javascript 코드 사용
  return (
    <>
      <p>
        {var1} 선수는 연봉이 {var3} 억원 이다.
      </p>
      <div>{var1}</div>
      <div>{var2}</div>
      <div>{var3}</div>
      {/* boolean, null, undefined 은 출력 안됨*/}
      <div>{var4}</div>
      <div>{var5}</div>
      <div>{var6}</div>
      <div>{var7}</div>
      <div>{var8}</div>
      <div>{var8[0]}</div>
      <div>{var8[1]}</div>
      {/* 객체는 그냥 쓰면 오류남 */}
      {/* property 접근법으로 사용 */}
      {/*<div>{var9}</div>*/}
      <div>{var9.age}</div>
      <div>{var9.name}</div>
      <div>{myTag}</div>
    </>
  );
}

export default App;
