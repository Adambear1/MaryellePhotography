import React from "react";
import image from "./images/image-jumbotron.jpg";

function Jumbotron() {
  return (
    <div className="uk-cover-container image-jumbotron">
      <img className="image-jumbotron" src={image} alt="" uk-cover />
    </div>
  );
}

export default Jumbotron;
