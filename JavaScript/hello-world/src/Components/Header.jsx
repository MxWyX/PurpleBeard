import React from "react";
import "../General.css";

function Header(props) {
  return (
    <div className="header">
      <p>This is a header</p>
      <p>{props}</p>
    </div>
  );
}

export default Header();
s;
