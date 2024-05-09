// built-in component : html 의 기본 요소, 태그명이 소문자로 시작
// component : 직접만든 요소(태그), 대문자로 시작
// component 는 return 을 가진 함수

// props

<Welcome name="" />;
function Welcome(props) {
  return <h1>Hello, {props.name};</h1>;
}

function MyComponent() {
  // return : 화면에 출력할 코드
  return <div>hello component !! </div>;
}

function MyComp() {
  // JSX 코드 : <div></div> 이런식의 태그를 가진 코드
  const myElem = <h1>hi JSX !</h1>;

  return myElem;
}

function App() {
  // 한줄 주석
  /*
   * 여러줄 주석
   */

  // component 사용 시 종료 태그 생략할 수 없음
  return (
    <>
      <div>
        <Welcome name={"react"} />
        {/* jsx 내에서의 주석 */}
        <h1>Hello REACT!!</h1>
        <h2>작업중엔 ctrl + s</h2>
        <br />
        <MyComponent />
        <MyComp />
      </div>
    </>
  );
}

export default App;
