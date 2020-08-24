import React, { useState, useEffect } from "react";
import "./styles.css";
import image from "./images/image-jumbotron.jpg";

function Jumbotron() {
  //

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (+windowDimensions.width < 750) {
    try {
      document
        .getElementsByClassName("uk-cover-container")[0]
        .childNodes[0].classList.remove(
          "uk-position-cover",
          "uk-flex",
          "uk-flex-center",
          "uk-flex-middle"
        );
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      document
        .getElementsByClassName("desktop-view")[0]
        .classList.add(
          "uk-position-cover",
          "uk-flex",
          "uk-flex-center",
          "uk-flex-middle"
        );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="uk-cover-container uk-height-large uk-margin-remove">
      <div className="desktop-view">
        <img src={image} alt="" uk-cover="true" />
      </div>
    </div>
  );
}

export default Jumbotron;
