function App() {
  // && , ||

  // falsy(false 같은)
  // : false, 0 , "", null, undefined

  const a = undefined;
  if (a) {
    // 자바스크립트는 a에 boolean 이 아닌 것도 가능함 ( 0 = false)
    console.log("a는 참이다");
  } else {
    console.log("a는 거짓이다");
  }

  // truthy (true 같은) : falsy 가 아니면 truthy

  // &&, || 와 조합

  let b = 0;
  let c = b && "값이 있음"; // c가 b 이면 -> "값이있음", 아니면 c는 b이다.
  console.log(c);

  let d = b || "값이 없음"; // d가 b가 아니면 -> " 값이없음 "
  console.log(d);

  return <div></div>;
}

export default App;
