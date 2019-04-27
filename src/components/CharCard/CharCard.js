import React from "react";
import "./CharCard.css";

const CharCard = props => (
  <div
    role="img"
    aria-label="click item"
    className="CharCard"
    style={{ backgroundImage: `url("${props.image}")` }}
    onClick={() => props.handleClick(props.id)}
  />
);

export default CharCard;
