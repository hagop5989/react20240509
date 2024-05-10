import React from "react";

function App(props) {
  const a = {
    name: "John",
    age: 44,
    address: {
      street: "Lorem Ipsum",
      city: "seoul",
    },
  };

  // 얕은 복사 (shallow copy)
  const { ...b } = a;
  b.age = 55;
  console.log("b.age", b.age); // 55
  console.log("a.age", a.age); // 44

  b.address.city = "busan";
  console.log("a.address.city :", a.address.city); // seoul
  console.log("b.address.city :", b.address.city); // busan

  // 깊은 복사 (deep copy)
  // 얕은 복사를 여러번 해서 해결
  const { ...c } = a; // 얕은 복사
  const { ...address1 } = a.address; // 얕은 복사
  c.address = address1;
  c.address.city = "london";
  console.log("a.address.city :", a.address.city);
  console.log("c.address.city :", c.address.city);

  // 연습 : 깊은 복사
  const d = {
    company: {
      name: "apple",
      location: "US",
    },
    name: "iphone",
    price: 300,
  };

  const { ...e } = d;
  const { ...company1 } = d.company;
  e.company = company1;

  e.name = "galaxy";
  e.company.name = "samsung";

  console.log("d.name", d.name);
  console.log("d.company.name:", d.company.name);
  console.log("e.name", e.name);
  console.log("e.company.name:", e.company.name);

  return <div></div>;
}

export default App;
