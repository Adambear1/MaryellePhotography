import React, { useState, useEffect } from "react";
import "./styles.css";

import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Services from "../../components/Services";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";
import Footer from "../../components/Footer";

function Home() {
  const [key, setKey] = useState();
  const [render, setRender] = useState({
    0: <Services />,
    1: <Contact />,
    2: <Portfolio />,
  });
  useEffect(() => {
    setKey(0);
  }, []);

  function onClick() {
    document.querySelector(".pag-right").classList.add("temp-hide");
    let i = key;
    i++;
    if (i > 2) {
      setKey(0);
    } else {
      setKey(i);
    }
    setTimeout(() => {
      document.querySelector(".pag-right").classList.remove("temp-hide");
    }, 750);
  }
  console.log(key);

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="uk-container ">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabindex="-1"
          uk-slider="true"
        >
          <ul className="uk-slider-items uk-grid ">
            <li className="uk-width-1 uk-width-panel">
              <div className="uk-panel">
                <h1
                  className="main-header"
                  value="services"
                  name="services"
                  id="services"
                >
                  Services
                </h1>
              </div>
            </li>
            <li className="uk-width-1 uk-width-panel">
              <div className="uk-panel ">
                <h1
                  className="main-header"
                  value="contact"
                  name="contact"
                  id="contact"
                >
                  Contact
                </h1>
              </div>
            </li>
            <li className="uk-width-1 uk-width-panel">
              <div className="uk-panel ">
                <h1 className="main-header" value="portfolio" name="portfolio">
                  Portfolio
                </h1>
              </div>
            </li>
          </ul>
          <a
            className="uk-position-center-right uk-position-small pag-right"
            href="#"
            uk-slidenav-next="true"
            uk-slider-item="next"
            onClick={onClick}
          ></a>
        </div>
      </div>
      <div className="uk-container">{render[key]}</div>
      <Footer />
    </>
  );
}

export default Home;
