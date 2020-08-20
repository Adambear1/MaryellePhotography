import React from "react";
import image from "./images/image-jumbotron.jpg";

function Jumbotron() {
  return (
    <div className="uk-cover-background">
      <img
        className="uk-invisible"
        src={image}
        width="100%"
        height="auto"
        alt=""
      />
    </div>
  );
}

export default Jumbotron;
