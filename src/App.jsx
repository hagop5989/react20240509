import React from "react";

function MyInfo({ name, team, salary, country }) {
  console.log({});

  return (
    <div>
      <ul>
        <li>name : {name}</li>
        <li>team : {team}</li>
        <li>salary : {salary}</li>
        <li>country : {country}</li>
      </ul>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyInfo name="흥민" team="토트넘" salary={500} country="korea" />
    </div>
  );
}

export default App;
