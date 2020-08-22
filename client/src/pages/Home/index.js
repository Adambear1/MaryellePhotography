import React, { useState } from "react";
import "./styles.css";

import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Services from "../../components/Services";
import BookNow from "../../components/BookNow";
import Portfolio from "../../components/Portfolio";

function Home() {
  const [key, setKey] = useState();
  const [render, setRender] = useState({
    Services: <Services />,
    "Book Now": <BookNow />,
    Portfolio: <Portfolio />,
  });
  function onClick() {
    setTimeout(() => {
      for (let item of document.getElementsByClassName("uk-width-panel")) {
        // console.log(item);
        if (item.classList.contains("uk-active")) {
          console.log(item.childNodes[0].innerText);
          setKey(item.childNodes[0].innerText);
        }
      }
    }, 1000);
  }

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
                <h1 className="main-header" value="services" name="services">
                  Services
                </h1>
              </div>
            </li>
            <li className="uk-width-1 uk-width-panel">
              <div className="uk-panel ">
                <h1
                  className="main-header"
                  value="bookNow"
                  name="bookNow"
                  id="bookNow"
                >
                  Book Now
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
            className="uk-position-center-right uk-position-small  pag-right"
            href="#"
            uk-slidenav-next="true"
            uk-slider-item="next"
            onClick={onClick}
          ></a>
        </div>
      </div>
      <div className="uk-container">{key ? render[key] : null}</div>
    </>
  );
}

export default Home;
