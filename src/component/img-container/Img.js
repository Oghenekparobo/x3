import React from "react";
import "./img.css";

const Img = ({ image }) => (
  <div className={"card"}>
    <img className={"cardImage"} src={image.url} alt={image.caption} />
  </div>
);

export default Img;
