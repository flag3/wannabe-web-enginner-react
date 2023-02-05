import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <ItemList />
      <ToDoList />
    </div>
  );
}

export default App;
