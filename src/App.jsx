import React, { useState } from "react";

function ToDoApp() {
  const [task, setTask] = useState(""); // 할 일 입력 상태
  const [tasks, setTasks] = useState([]); // 할 일 목록 상태

  // 할 일 입력을 처리하는 함수
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  // 할 일을 추가하는 함수
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼 제출 이벤트의 기본 동작 막기
    if (task !== "") {
      setTasks([...tasks, task]); // 새 할 일을 목록에 추가
      setTask(""); // 입력 필드 초기화
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // 리스트 렌더링
        ))}
      </ul>
    </div>
  );
}

function App() {
  const a = 5;
  const b = 9;

  function someMethod() {
    return "hello js";
  }

  function someMethod2(p) {
    return p + " " + p;
  }

  return (
    <>
      <div>
        <p>
          {a} x {b} = {a * b}
        </p>
        <p>{someMethod()}</p>
        <p>{someMethod2("react")}</p>
        <ToDoApp />
      </div>
    </>
  );
}

export default App;
