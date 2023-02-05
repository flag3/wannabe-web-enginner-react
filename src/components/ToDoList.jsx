import ToDo from "./ToDo"
import { useState } from "react";

const ToDoList = () => {
  const [toDoName, setToDoName] = useState("");
  const [toDoStatus, setToDoStatus] = useState("");
  const [toDos, setToDos] = useState([
    { name: "あいうえお", stat: "未完了"},
    { name: "かきくけこ", stat: "完了"},
  ]);
  return (
    // ここにTodoコンポーネントを並べるl
    <div>
      <h2>ToDoリスト</h2>
      <ul>
        {toDos.map((todo) => {
          return (
            <li key={todo.name}>
              <ToDo name={todo.name} stat={todo.stat} />
            </li>
          );
        })}
      </ul>
      <div>
        <label htmlFor="toDoName">
          ToDo :
          <input
            type="text"
            id="toDoName"
            onChange={(e) => setToDoName(e.target.value)}
            value={toDoName}
          />
        </label>
      </div>
      <button
        onClick={() => {
          setToDos((toDos) => [
            ...toDos,
            { name: toDoName, stat: "未完了" },
          ]);
        }}
      >
        追加
      </button>
    </div>
  );
};

export default ToDoList;

