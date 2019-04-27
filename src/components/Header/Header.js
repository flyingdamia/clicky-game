import React from "react";
import "./Header.css";
import Message from "../Message";

const Header = props => (
  <div className="header">
    <ul>
      <li>
        <h2 className=" title">Charlie Brown's Clicky Game</h2>
      </li>
      <Message score={props.score} topScore={props.topScore} />
      <li id="score">
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </div>
);

export default Header;
