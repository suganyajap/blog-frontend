import React from "react";
import "./Header.css";
import bg from "../../images/bg.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header_titles">
        <span className="header_title1">MERN-STACK </span>
        <span className="header_title2">BLOG </span>
      </div>
      <img src={bg} alt="backgroud" />
    </div>
  );
}

export default Header;