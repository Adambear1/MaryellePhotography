import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import { Context } from "../../components/Context";
import Services from "../../components/Services";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";

function Home() {
  const [key, setKey] = useState(1);
  const [render, setRender] = useState({
    1: <Services />,
    2: <Contact />,
    3: <Portfolio />,
  });

  const { value, setValue } = useContext(Context);
  useEffect(() => {
    document.querySelector(".main-header").innerText = "Services";
  }, []);
  useEffect(() => {
    if (value) {
      if (value == "Services") {
        document.querySelectorAll(".main-header").innerText = "Services";
        document
          .querySelector(".main-header")
          .classList.add("uk-animation-fade");
        setKey(1);
      } else if (value == "Contact") {
        document.querySelector(".main-header").innerText = "Contact";
        document
          .querySelector(".main-header")
          .classList.add("uk-animation-fade");
        setKey(2);
      } else if (value == "Portfolio") {
        document.querySelector(".main-header").innerText = "Portfolio";
        document
          .querySelector(".main-header")
          .classList.add("uk-animation-fade");
        setKey(3);
      }
    }
    if (key) {
      if (key == 1) {
        console.log(key);
        document.querySelector(".main-header").innerText = "Services";
      } else if (key == 2) {
        console.log(key);
        document.querySelector(".main-header").innerText = "Contact";
      } else {
        console.log(key);
        document.querySelector(".main-header").innerText = "Portfolio";
      }
    }
  }, [key, value]);

  function onClick() {
    setValue(null);
    let i = key;
    i++;
    if (i > 3) {
      i = 1;
    }
    setKey(i);
    document
      .querySelector(".uk-panel")
      .classList.add(
        "uk-animation-slide-left-medium",
        "uk-animation-reverse",
        "uk-animation-fast"
      );
    document.querySelector(".pag-right").classList.add("temp-hide");

    setTimeout(() => {
      document
        .querySelector(".uk-panel")
        .classList.remove(
          "uk-animation-slide-left-medium",
          "uk-animation-reverse",
          "uk-animation-fast"
        );
      document.querySelector(".pag-right").classList.remove("temp-hide");
    }, 500);
  }
  console.log(key);

  return (
    <>
      <div className="uk-container ">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          uk-slider="true"
        >
          <div className="uk-slider-items uk-grid ">
            <div className="uk-panel">
              <h1 className="main-header"></h1>
            </div>
          </div>

          <a
            className="uk-position-center-right uk-position-small pag-right"
            uk-icon="icon: chevron-right; ratio: 2"
            onClick={onClick}
          ></a>
        </div>
      </div>
      <div className="uk-container">{render[key]}</div>
    </>
  );
}

export default Home;
