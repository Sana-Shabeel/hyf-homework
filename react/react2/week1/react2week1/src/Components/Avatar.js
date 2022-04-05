import React, { useContext, useEffect } from "react";
import ThemeChanger, { themeStyle } from "./Context/Context";
function Avatar() {
  const { toggleTheme, setToggleTheme, queryResult } = useContext(ThemeChanger);
  const defaultAvatar = "https://avatars.githubusercontent.com/u/583231?v=4";
  return (
    <img src={queryResult.avatar_url ?? defaultAvatar} alt="user avatar" />
  );
}

export default Avatar;
