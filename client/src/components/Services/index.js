import React, { useState } from "react";
import "./styles.css";
import redRoses from "./images/redRoses.jpg";
import notepad from "./images/notepad.jpg";
import wedding from "./images/wedding.jpg";
import question from "./images/question.jpg";
import ServicesVenue from "../ServicesVenue";
import ServicesOccasions from "../ServicesOccasions";
import ServicesBody from "../ServicesBody";
import ServicesScheduling from "../ServicesScheduling";
import ServicesFAQ from "../ServicesFAQ";

function Services() {
  let information = [
    {
      type: "Venues",
      picture: redRoses,
    },
    {
      type: "Occasions",
      picture: wedding,
    },
    {
      type: "Scheduling",
      picture: notepad,
    },
    {
      type: "FAQ",
      picture: question,
    },
  ];
  const [main, setMain] = useState();
  const [selectorState, setSelectorState] = useState({
    Venues: <ServicesVenue />,
    Occasions: <ServicesOccasions />,
    Scheduling: <ServicesScheduling />,
    FAQ: <ServicesFAQ />,
  });

  function click(e) {
    if (e.target.innerText == "") {
      setMain(main);
    }
    setMain(e.target.innerText);
    console.log(selectorState[main]);
  }
  console.log(main);

  return (
    <>
      <h1 classNameName="section-header uk-margin-top">Services</h1>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="true"
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-3@m">
          {information.map((item) => {
            return (
              // <li className="uk-list-muted ">
              <div class="item" onClick={click} onMouseOver={click}>
                <div class="polaroid ">
                  <img className="image-header-card" src={item.picture} />
                  <div class="caption services-card-name">{item.type}</div>
                </div>
              </div>
              // </li>
            );
          })}
        </ul>
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slider-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slider-item="next"
        ></a>
      </div>
      {<ServicesBody selector={selectorState[main]} />}
    </>
  );
}

export default Services;
