import React, { useContext } from "react";
import ThemeChanger, { themeStyle } from "./Context/Context";

function Bio() {
  const { toggleTheme, setToggleTheme, queryResult } = useContext(ThemeChanger);
  return (
    <p className="bio" style={{ color: toggleTheme.contentColor }}>
      {queryResult.bio ?? "This user has no bio "}
    </p>
  );
}

export default Bio;
