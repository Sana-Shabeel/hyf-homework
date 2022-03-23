import "./App.css";
import Table from "./Components/Table";

function App() {
  const todos = [
    {
      Description: "Get out of bed",
      DeadlineDate: "Wed Sep 13 2017",
    },
    {
      Description: "Brush teeth",
      DeadlineDate: "Thu Sep 14 2017",
    },
    {
      Description: "Eat breakfast",
      DeadlineDate: "Fri Sep 15 2017",
    },
  ];

  return (
    <div className="App">
      <Table todoData={todos} />
    </div>
  );
}

export default App;
