function App() {
  const name = "흥민";
  const age = 5; // or 30;
  return (
    <div>
      <form action=""></form>
      <p>name = {name}</p>
      {name == "흥민" && <p>공격수</p>}
      {name == "강인" && <p>미드필더</p>}
      <hr />
      <p>age = {age}</p>
      {age >= 20 && <p>투표가능</p>}
      {age < 20 && <p>투표불가능</p>}
    </div>
  );
}

export default App;
