function App(props) {
  const obj = {
    age: 30,
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "1234567890",
  };
  return (
    <div>
      <ul>
        <li>{obj.name}</li>
        <li>{obj.email}</li>
        <li>{obj.age}</li>
        <li>{obj.password}</li>
      </ul>
    </div>
  );
}

export default App;

import React from "react";
