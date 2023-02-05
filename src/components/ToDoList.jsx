import ToDo from "./ToDo"
const ToDoList = () => {
  return (
    // ここにTodoコンポーネントを並べるl
    <div>
      <h2>ToDoリスト</h2>
      <ul>
        <li>
          <ToDo name="あいうえお" stat="未完了" />
        </li>
        <li>
          <ToDo name="かきくけこ" stat="完了" />
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;

