import React, { useContext, useState } from "react";
import ThemeChanger, { themeStyle } from "./Context/Context";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

function SearchBar() {
  const { toggleTheme, setToggleTheme, setQuery, setQueryHandler } =
    useContext(ThemeChanger);
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const clickHandler = () => {
    setQueryHandler(inputValue);
    setInputValue("");
  };
  return (
    <div
      className="search-bar"
      style={{
        backgroundColor: toggleTheme.contentBg,
        boxShadow: toggleTheme.boxShadow,
      }}
    >
      <BsSearch className="search-icon" />
      <input
        type="text"
        value={inputValue}
        placeholder="Search Github username"
        onChange={inputChangeHandler}
        style={{ color: toggleTheme.color }}
      />
      <button onClick={clickHandler} style={{ color: toggleTheme.color }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
