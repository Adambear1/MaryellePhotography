import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import { Context } from "../../components/Context";
import Services from "../../components/Services";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";

function Home() {
  const [key, setKey] = useState(0);
  const [render, setRender] = useState({
    0: <Services />,
    1: <Contact />,
    2: <Portfolio />,
  });

  const { value, setValue } = useContext(Context);

  useEffect(() => {
    if (value) {
      if (value == "Services") {
        document.querySelectorAll(".main-header").innerText = "Services";
        document
          .querySelector(".main-header")
          .classList.add("uk-animation-fade");
        setKey(0);
      } else if (value == "Contact") {
        document.querySelector(".main-header").innerText = "Contact";
        document
          .querySelector(".main-header")
          .classList.add("uk-animation-fade");
        setKey(1);
      } else if (value == "Portfolio") {
        document.querySelector(".main-header").innerText = "Portfolio";
        document
          .querySelector(".main-header")
          .classList.add("uk-animation-fade");
        setKey(2);
      }
    }
    // else {
    //setKey(0);
    // }
    if (key) {
      if (key == 0) {
        document.querySelector(".main-header").innerText = "Services";
      } else if (key == 1) {
        document.querySelector(".main-header").innerText = "Contact";
      } else if (key == 2) {
        document.querySelector(".main-header").innerText = "Portfolio";
      }
    } else {
      document.querySelector(".main-header").innerText = "Services";
    }
  }, [value, key]);

  function onClick() {
    let i = key;
    console.log(key);
    i > 2 ? setKey(0) : setKey(+i++);

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
    }, 750);
  }

  return (
    <>
      <div className="uk-container ">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider="true"
        >
          <div className="uk-slider-items uk-grid ">
            <div className="uk-panel">
              <h1
                className="main-header"
                value="services"
                name="services"
                id="services"
              ></h1>
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
