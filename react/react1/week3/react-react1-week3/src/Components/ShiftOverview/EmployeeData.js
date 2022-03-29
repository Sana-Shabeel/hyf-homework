import FancyBorder from "../FancyBorder";

function EmployeeData({ name, start, end }) {
  return (
    <FancyBorder>
      <h2>{name}</h2>
      <p>{start}</p>
      <p>{end}</p>
    </FancyBorder>
  );
}

export default EmployeeData;
