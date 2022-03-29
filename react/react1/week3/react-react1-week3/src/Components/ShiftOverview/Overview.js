import { useState } from "react";
import EmployeeData from "./EmployeeData";
import "./styles.css";
function Overview({ employeeShift }) {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const filteredEmployeShift = employeeShift.filter((emp) =>
    emp.name.includes(inputValue)
  );
  return (
    <div className="overview">
      <h1>Shift Overview</h1>
      <h4>Filter Shifts</h4>
      <div className="search-name">
        <input
          type="text"
          className="search"
          onChange={inputChangeHandler}
          placeholder="Search by name"
        />
      </div>
      {filteredEmployeShift.map((emp) => {
        return (
          <EmployeeData
            key={emp.id}
            name={emp.name}
            start={emp.start}
            end={emp.end}
          />
        );
      })}
    </div>
  );
}
export default Overview;
