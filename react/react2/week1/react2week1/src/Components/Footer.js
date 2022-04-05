import React, { useContext, useEffect } from "react";
import ThemeChanger, { themeStyle } from "./Context/Context";
import { MdLocationOn } from "react-icons/md";
import { BiFontSize, BiLink } from "react-icons/bi";
import { BsTwitter, BsBuilding } from "react-icons/bs";

function Footer() {
  const { toggleTheme, setToggleTheme, queryResult } = useContext(ThemeChanger);

  const grayishColor = { color: toggleTheme.contentColor };
  const iconBlue = { color: toggleTheme.iconsBlue };
  return (
    <div className="footer-container">
      <div>
        <MdLocationOn style={iconBlue} className="icon" />
        <p style={grayishColor}>{queryResult.location ?? "Not Available"}</p>
      </div>
      <div>
        <BsTwitter style={iconBlue} className="icon" />
        <p style={grayishColor}>
          {queryResult.twitter_username ?? "Not Available"}
        </p>
      </div>
      <div>
        <BiLink style={iconBlue} className="icon" />
        <a href={queryResult.blog} target="_blank" style={grayishColor}>
          https://github.blog
        </a>
      </div>
      <div>
        <BsBuilding style={iconBlue} className="icon" />
        <p style={grayishColor}>{queryResult.company ?? "Not Available"}</p>
      </div>
    </div>
  );
}

export default Footer;
