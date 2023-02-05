import ToDo from "./ToDo"
import { useState } from "react";

const ToDoList = () => {
  const [todos] = useState([
    { name: "あいうえお", stat: "未完了"},
    { name: "かきくけこ", stat: "完了"},
  ]);
  return (
    // ここにTodoコンポーネントを並べるl
    <div>
      <h2>ToDoリスト</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.name}>
              <ToDo name={todo.name} stat={todo.stat} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;

