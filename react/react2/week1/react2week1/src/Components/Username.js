import React, { useContext, useEffect } from "react";
import ThemeChanger, { themeStyle } from "./Context/Context";
function Username() {
  const { toggleTheme, setToggleTheme, queryResult } = useContext(ThemeChanger);
  return (
    <div className="username">
      <h2>{queryResult.name ?? "The Octocat"}</h2>
      <p>{`@${queryResult.login}` ?? "@octocat"}</p>
    </div>
  );
}

export default Username;
