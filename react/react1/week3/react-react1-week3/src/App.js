import { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/SubmitShift/Form";
import Overview from "./Components/ShiftOverview/Overview";
function App() {
  const [shiftInfo, setShiftInfo] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    addShiftData();
  }, []);

  const getInitialData = () => {
    return fetch(
      "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
    ).then((response) => response.json());
  };

  const addShiftData = () => {
    getInitialData().then((data) => {
      let newId = 0;
      data.forEach((shift) => (shift.id = newId++));
      setShiftInfo((prev) => [...prev, ...data]);
    });
  };
  const getShiftInfoHandler = (shift) => {
    setShiftInfo((prev) => {
      const id = prev.length + 1;
      shift.forEach((shift) => (shift.id = id));
      return [...shift, ...prev];
    });
  };
  const changeClickState = () => {
    setClicked(true);
  };
  const cancelClickState = () => {
    setClicked(false);
  };
  return (
    <div>
      {!clicked && (
        <button className="btn-state" onClick={changeClickState}>
          Add Shift
        </button>
      )}
      {clicked && (
        <Form
          onSave={getShiftInfoHandler}
          onClickEvent={cancelClickState}
        ></Form>
      )}
      <Overview employeeShift={shiftInfo}></Overview>
    </div>
  );
}

export default App;
