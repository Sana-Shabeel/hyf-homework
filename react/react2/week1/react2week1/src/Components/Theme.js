import React, { useContext } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./HeaderStyles.css";
import ThemeChanger, { themeStyle } from "./Context/Context";

function Theme() {
  const { toggleTheme, setToggleTheme } = useContext(ThemeChanger);

  // const themes = useContext(ThemeChanger);
  const themeChanger = () => {
    setToggleTheme((prev) =>
      prev === themeStyle.darkmode ? themeStyle.lightmode : themeStyle.darkmode
    );
  };
  return (
    <div className="theme">
      <p className="theme-text">{toggleTheme.toggleText}</p>
      <BsFillSunFill onClick={themeChanger} />
    </div>
  );
}

export default Theme;
