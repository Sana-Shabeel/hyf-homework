import Tbody from "./Tbody";
import Thead from "./Thead";
import "./table.css";

function Table(props) {
  const tbody = props.todoData.map((todo) => {
    return (
      <Tbody descriptions={todo.Description} deadlines={todo.DeadlineDate} />
    );
  });
  return (
    <div>
      <table className="table">
        <Thead />
        {tbody}
      </table>
    </div>
  );
}

export default Table;
