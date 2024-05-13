import React, { useState } from "react";

function App(props) {
  const [person, setPerson] = useState({
    name: "",
    address: "",
    city: "",
    email: "",
  });
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            // person.name = e.target.value;
            const { ...nextPerson } = person;
            nextPerson.name = e.target.value;
            setPerson(nextPerson);
          }}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            const { ...nextPerson } = person;
            nextPerson.email = e.target.value;
            setPerson(nextPerson);
          }}
          placeholder={"이메일"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            const nextPerson = { ...person, city: e.target.value };
            setPerson(nextPerson);
          }}
          placeholder={"도시"}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setPerson({ ...person, address: e.target.value });
          }}
          placeholder={"주소"}
        />
      </div>
      <ul>
        <li>name : {person.name}</li>
        <li>email : {person.email}</li>
        <li>city : {person.city}</li>
        <li>address : {person.address}</li>
      </ul>
    </div>
  );
}

export default App;
