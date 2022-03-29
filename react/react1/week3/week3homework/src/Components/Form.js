import { useState } from "react";

function Form({ onSubmit }) {
  const [descriptionValue, setDescriptionValue] = useState("");
  const [deadlineValue, setDeadlineValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const descriptionChangeHandler = (e) => {
    setDescriptionValue(e.target.value);
  };
  const deadlineChangeHandler = (e) => {
    setDeadlineValue(e.target.value);
  };
  const sumbitChangeHandler = (e) => {
    e.preventDefault();
    if (deadlineValue.trim() === "" && deadlineValue.trim() === "") {
      return setIsValid(false);
    }
    setIsValid(true);
    const userTodo = [
      {
        description: descriptionValue,
        deadline: deadlineValue,
      },
    ];
    onSubmit(userTodo);
    setDescriptionValue("");
    setDeadlineValue("");
  };
  const setMaxDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];

  return (
    <form>
      <div className="todo-description">
        <label>Todo description</label>
        <input
          type="text"
          value={descriptionValue}
          onChange={descriptionChangeHandler}
          className="add-todo"
          placeholder="add todo"
        />
      </div>

      <div className="todo-deadline">
        <label>Deadline</label>
        <input
          type="date"
          value={deadlineValue}
          min={setMaxDate}
          onChange={deadlineChangeHandler}
          className="add-deadline"
        />
      </div>
      {!isValid && (
        <h5 className="not-valid">Make sure both input fields are not empty</h5>
      )}

      <button
        type="submit"
        onClick={sumbitChangeHandler}
        className="sumbit-btn"
      >
        Add todo
      </button>
    </form>
  );
}
export default Form;
