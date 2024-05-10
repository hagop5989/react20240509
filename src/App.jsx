import React from "react";

function App(props) {
  const person = {
    email: "test@example.com",
    name: "test",
    address: "강남",
    country: "usa",
  };

  const { email, name, address, country } = person;

  console.log("email: ", email);
  console.log("name: ", name);
  console.log("address: ", address);
  console.log("country: ", country);

  return <div></div>;
}

export default App;
