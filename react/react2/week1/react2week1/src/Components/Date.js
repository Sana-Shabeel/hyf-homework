import React, { useContext } from "react";
import ThemeChanger, { themeStyle } from "./Context/Context";
import Moment from "react-moment";
import "moment-timezone";

function Date() {
  const { toggleTheme, setToggleTheme, queryResult } = useContext(ThemeChanger);

  const created = queryResult.created_at;
  return (
    <div>
      <span>Joined </span>
      <Moment format="DD MMM YYYY" withTitle>
        {created}
      </Moment>
    </div>
  );
}

export default Date;
