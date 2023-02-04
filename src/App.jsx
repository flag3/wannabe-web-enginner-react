import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import ToDo from "./components/ToDo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <ItemList />
      <ToDo />
    </div>
  );
}

export default App;
