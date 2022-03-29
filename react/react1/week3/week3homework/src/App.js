import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import Timer from "./Components/Timer";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    addInitialData();
  }, []);

  const getInitialData = () => {
    return fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    ).then((res) => res.json());
  };
  const addInitialData = () => {
    getInitialData().then((data) => {
      setTodos((prev) => [...prev, ...data]);
    });
  };
  const getTodo = (todo) => {
    const newId = todos.length + 1;
    todo.forEach((todo) => (todo.id = newId));
    setTodos((prev) => [...todo, ...prev]);
  };
  const deleteTodoHandler = (id) => {
    return setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const getUpdatedTodoHandler = (updatedTodo) => {
    setTodos((prev) => {
      const removeOld = prev.filter((todo) => todo.id !== updatedTodo[0].id);
      return [...updatedTodo, ...removeOld];
    });
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <h4>You have used {<Timer />} seconds</h4>
      <Form onSubmit={getTodo}></Form>
      <TodoList
        todos={todos}
        onDelete={deleteTodoHandler}
        onUpdate={getUpdatedTodoHandler}
      />
    </div>
  );
}

export default App;
