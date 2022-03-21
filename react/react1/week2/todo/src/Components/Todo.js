import { useState } from "react";
import "./Todo.css";
const rand = (length) => Math.floor(Math.random() * length);
function Todo(props) {
  const [addTodo, setAddTodo] = useState(props.todos);
  const newId = addTodo.length + 1;
  const randomTodos = [
    "Start working on homework",
    "Finish doing push-ups",
    "remember to buy something",
    "random todo",
    "another random todo",
  ];
  const newTodo = {
    id: newId,
    description: randomTodos[rand(randomTodos.length)],
  };
  const addTodoHandler = () => {
    return setAddTodo((prev) => [...prev, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setAddTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <button onClick={addTodoHandler}>Add new todo</button>
      {addTodo.length === 0 && <h2>There are no todos left</h2>}
      {addTodo.length > 0 && (
        <ul>
          {addTodo.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" />
              <span> {todo.description}</span>
              <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
