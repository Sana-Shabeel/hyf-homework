import React from "react";

export const themeStyle = {
  darkmode: {
    backgroundColor: "#141c30",
    button: "#007aff",
    iconsBlue: "#fff",
    contentColor: "#7da1a3",
    contentBg: "#1f2a48",
    color: "#fff",
    followingsBackground: "#141c30",
    toggleText: "LIGHT",
    toggleIcon: "BsFillSunFill",
  },
  lightmode: {
    backgroundColor: "#ffffff",
    button: "#007aff",
    iconsBlue: "#184582",
    contentColor: "#7da1a3",
    contentBg: "#f6f7f8",
    color: "#000",
    followingsBackground: "#dddddd",
    boxShadow: "0px 5px 5px 2px #2524248f",
    toggleText: "DARK",
    toggleIcon: "BsFillMoonFill",
  },
};
const themeChanger = React.createContext(themeStyle.darkmode);
export default themeChanger;
