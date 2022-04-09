import React, { useContext } from "react";
import ThemeChanger, { themeStyle } from "./Context/Context";

function Following() {
  const { toggleTheme, setToggleTheme, queryResult } = useContext(ThemeChanger);
  const styles = { color: toggleTheme.contentColor };
  const styles2 = { color: toggleTheme.color };
  return (
    <div
      className="display-followings"
      style={{ backgroundColor: toggleTheme.followingsBackground }}
    >
      <div>
        <p className="following-text" style={styles}>
          Repo
        </p>
        <p style={styles2}>{queryResult.public_repos ?? "012"}</p>
      </div>
      <div>
        <p className="following-text" style={styles}>
          Followers
        </p>
        <p style={styles2}>{queryResult.followers ?? "034"}</p>
      </div>
      <div>
        <p className="following-text" style={styles}>
          Following
        </p>
        <p style={styles2}>{queryResult.following ?? "056"}</p>
      </div>
    </div>
  );
}

export default Following;
