import { useState, useEffect } from "react";
import FancyBorder from "./FancyBorder";

function TodoList({ todos, onDelete, onUpdate }) {
  const [startEditable, setStartEditable] = useState(false);
  //   const [endEditable, setEndEditable] = useState(false);
  const [inputValue, setInputValue] = useState(" ");

  const startEditableTodoHandler = () => {
    setStartEditable(true);
  };
  const endEditableTodoHandler = (todoId, todoDeadline, todoDesc) => {
    // if the description is updated with making any changes it changes to empty string so this is for that case
    const isDescriptionEmpty = {
      description: inputValue.length === 0 ? todoDesc : inputValue,
    };
    const todo = [
      {
        id: todoId,
        description:
          isDescriptionEmpty.description.trim().length === 0
            ? todoDesc
            : isDescriptionEmpty.description,
        deadline: todoDeadline,
      },
    ];
    onUpdate(todo);
    setStartEditable(false);
  };
  const updateChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  if (!startEditable) {
    return (
      <div>
        {todos.map((todo) => {
          return (
            <FancyBorder key={todo.id}>
              <input type="checkbox" className="checkbox" />
              <p>
                Description: {todo.description} | Deadline: {todo.deadline}
              </p>

              <button
                type="button"
                onClick={() => onDelete(todo.id)}
                className="delete"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={startEditableTodoHandler}
                className="edit"
              >
                Edit
              </button>
            </FancyBorder>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <FancyBorder key={todo.id}>
            <input type="checkbox" className="checkbox" />

            <input
              type="text"
              defaultValue={todo.description}
              onChange={updateChangeHandler}
              className="update-input"
            />

            <button
              type="button"
              onClick={() => onDelete(todo.id)}
              className="delete"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() =>
                endEditableTodoHandler(todo.id, todo.deadline, todo.description)
              }
              className="edit"
            >
              Update
            </button>
          </FancyBorder>
        );
      })}
    </div>
  );
}

export default TodoList;

//  {!editable && (
//     <p>
//     Description: {todo.description} | Deadline: {todo.deadline}
//   </p>
// )}
// {editable && <p contentEditable="true">{todo.description}</p>}
