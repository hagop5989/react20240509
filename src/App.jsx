import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }
  return <button onClick={handleLike}>Like {likes}</button>;
}

function LikeButton2() {
  let [likes2, setLikes2] = useState("좋아요");

  function handleLike2() {
    setLikes2((likes2 = "싫어요"));
  }
  return <button onClick={handleLike2}>Like {likes2}</button>;
}

function MyNav() {
  return (
    <div>
      <h1> hello header </h1>
      <h3> hello sub header </h3>
    </div>
  );
}

function MyFooter() {
  return (
    <ul>
      <li>link1</li>
      <li>link2</li>
    </ul>
  );
}

function MyHeader() {
  return (
    <>
      <a href="#">link 1</a>
      <a href="#">link 2</a>)
    </>
  );
}

// 다른 컴포넌트 안에 컴포넌트를 작성하면 안됨
function App() {
  return (
    <>
      <div> hello react</div>

      <MyHeader />

      <MyFooter />

      <MyNav />
      <LikeButton />
      <LikeButton2 />
    </>
  );
}

export default App;
