import React, { useContext } from "react";
import Theme from "./Theme";
import "./HeaderStyles.css";
function Header() {
  return (
    <div className="header">
      <h1>devfinder</h1>
      <Theme />
    </div>
  );
}

export default Header;
