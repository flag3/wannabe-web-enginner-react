import Todo from "./Todo";
import { useState } from "react";

const TodoList = () => {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([
    { name: "あいうえお", status: "未完" },
    { name: "かきくけこ", status: "完了" },
  ]);

  return (
    // ここにTodoコンポーネントを並べる
    <div>
      <h2>ToDoリスト</h2>
      <table>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={todo.name}
              name={todo.name}
              status={todo.status}
              handleOnClick={() => {
                if (todos[index].status === "未完") {
                  todos[index].status = "完了";
                } else if (todos[index].status === "完了") {
                  todos[index].status = "未完";
                }
                setTodos([...todos]);
              }}
              handleDelete={() => {
                while (index < todos.length - 1) {
                  const hoge = todos[index];
                  todos[index] = todos[index + 1];
                  todos[index + 1] = hoge;
                  index++;
                }
                todos.pop();
                setTodos([...todos]);
              }}
              handleUp={() => {
                if (index === 0) {
                  return;
                }
                const hoge = todos[index];
                todos[index] = todos[index - 1];
                todos[index - 1] = hoge;
                setTodos([...todos]);
              }}
              handleDown={() => {
                if (index === todos.length - 1) {
                  return;
                }
                const hoge = todos[index];
                todos[index] = todos[index + 1];
                todos[index + 1] = hoge;
                setTodos([...todos]);
              }}
            />
          );
        })}
      </table>
      <div>
        <label htmlFor="todoName">
          Todo :
          <input
            type="text"
            id="todoName"
            onChange={(e) => setTodoName(e.target.value)}
            value={todoName}
          />
        </label>
        <button
          onClick={() => {
            if (todoName === "") {
              return;
            }
            setTodos((todos) => [...todos, { name: todoName, status: "未完" }]);
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default TodoList;
