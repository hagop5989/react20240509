function MyTag() {
  return <h3> hello component</h3>;
}

function MyContent() {
  return <p> my content </p>;
}

function App() {
  return (
    <>
      <div>
        <h1>Hello REACT!!</h1>
        <MyTag />
        <MyTag />

        <MyContent />
      </div>
    </>
  );
}

export default App;
