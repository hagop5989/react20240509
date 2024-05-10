import React from "react";

function App(props) {
  // object ( {}, [] )
  // 나머지 모두 (rest property)
  // ...변수명

  const a = {
    name: "John",
    email: "john@example.com",
    password: "password",
    address: "gangnam",
  };
  const { name, email, ...b } = a;
  console.log("name", name);
  console.log("email", email);
  console.log("b.password", b.password);
  console.log("b.address", b.address);

  // 연습 :
  const c = {
    city: "seoul",
    country: "us",
    price: 500,
    category: "food",
  };

  // 작성!
  const { price, ...d } = c;
  console.log("price", price);
  console.log("d.city", d.city);
  console.log("d.country ", d.country);
  console.log("d.category", d.category);

  return <div></div>;
}

export default App;
