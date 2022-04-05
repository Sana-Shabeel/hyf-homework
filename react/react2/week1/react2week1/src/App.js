import { useState, useEffect } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import DisplayResults from "./Components/DisplayResult";
import ThemeChanger, { themeStyle } from "./Components/Context/Context";
import "./App.css";
function App() {
  const [toggleTheme, setToggleTheme] = useState(themeStyle.darkmode);
  // initialized to this user just to make the UI look better
  const [query, setQuery] = useState("octocat");
  const [queryResult, setQueryResult] = useState("");

  useEffect(() => {
    addData();
  }, [query]);

  const setQueryHandler = async (inputValue) => {
    setQuery(inputValue);
  };
  const fetchData = () => {
    return fetch(`https://api.github.com/users/${query}`).then((response) =>
      response.json()
    );
  };
  const addData = () => {
    fetchData().then((data) => {
      setQueryResult(data);
    });
  };

  return (
    <ThemeChanger.Provider
      value={{
        toggleTheme,
        setToggleTheme,
        setQuery,
        queryResult,
        setQueryHandler,
      }}
    >
      <div
        className="App"
        style={{
          backgroundColor: toggleTheme.backgroundColor,
          color: toggleTheme.color,
        }}
      >
        <Header />
        <SearchBar />
        <DisplayResults />
      </div>
    </ThemeChanger.Provider>
  );
}

export default App;
