import { useState } from "react";
import "./form.css";

function Form({ onSave, onClickEvent }) {
  const [nameValue, setNameValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const nameChangeHandler = (e) => {
    setNameValue(e.target.value);
  };
  const startDateChangeHandler = (e) => {
    setStartDateValue(e.target.value);
  };
  const endDateChangeHandler = (e) => {
    setEndDateValue(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSave([
      {
        name: nameValue,
        start: startDateValue,
        end: endDateValue,
      },
    ]);
    setNameValue("");
    setStartDateValue("");
    setEndDateValue("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={nameValue}
        onChange={nameChangeHandler}
        className="employee-name"
        placeholder="Your name..."
      />
      <h2>Start Date</h2>
      <input
        type="datetime-local"
        value={startDateValue}
        onChange={startDateChangeHandler}
      />
      <h2>End Date</h2>
      <input
        type="datetime-local"
        value={endDateValue}
        onChange={endDateChangeHandler}
      />
      <div className="form-action">
        <button type="button" onClick={onClickEvent} className="submit-shift">
          Cancel
        </button>
        <button type="submit" className="submit-shift">
          Sumbit
        </button>
      </div>
    </form>
  );
}
export default Form;
