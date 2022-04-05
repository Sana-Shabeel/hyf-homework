import React, { useContext } from "react";
import ThemeChanger, { themeStyle } from "./Context/Context";
import Following from "./DisplayFollowing";
import Username from "./Username";
import Avatar from "./Avatar";
import Footer from "./Footer";
import Bio from "./Bio";
import Date from "./Date";
import "./DisplayResults.css";
function DisplayResult() {
  const { toggleTheme, setToggleTheme } = useContext(ThemeChanger);

  return (
    <div
      className="display-results-container"
      style={{
        backgroundColor: toggleTheme.contentBg,
        boxShadow: toggleTheme.boxShadow,
      }}
    >
      <Avatar />
      <div className="display-results">
        <div className="username-date-container ">
          <Username />
          <Date />
        </div>
        <Bio />
        <Following />
        <Footer />
      </div>
    </div>
  );
}

export default DisplayResult;
