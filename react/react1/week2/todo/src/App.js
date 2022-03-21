import "./App.css";
import Todo from "./Components/Todo";
import Timer from "./Components/Timer";
function App() {
  const todos = [
    {
      id: 1,
      description: "Get out of bed",
    },
    {
      id: 2,
      description: "Brush teeth",
    },
    {
      id: 3,
      description: "Eat breakfast",
    },
  ];
  return (
    <div className="App">
      <Timer></Timer>
      <Todo todos={todos} key={todos.id}></Todo>
    </div>
  );
}

export default App;
