function MyComponent() {
  // 최상위 컴포넌트 사용하지 않을 때 -> fragment 사용
  return (
    <>
      <p>Lorem ipsum dolor.</p>
      <p>Consequuntur molestiae, repellendus.</p>
    </>
  );
}

function MyComp() {
  // 최상위 컴포넌트는 1개여야 함
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Maxime, vel.</p>
    </div>
  );
}

function MyTag() {
  // jsx 코드가 여러 줄일때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum</p>
      <p>Est, quoes?</p>
    </div>
  );
}

function App() {
  return (
    <div>
      hello react
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
