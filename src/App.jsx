import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <ItemList />
      <TodoList />
    </div>
  );
}

export default App;
