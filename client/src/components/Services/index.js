import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import flowers1 from "./images/flowers1.jpg";
import notepad from "./images/notepad.jpg";
import wedding from "./images/wedding.jpg";
import wedding1 from "./images/wedding1.jpg";
import question from "./images/question.jpg";
import ServicesVenue from "../ServicesVenue";
import ServicesOccasions from "../ServicesOccasions";
import ServicesBody from "../ServicesBody";
import ServicesScheduling from "../ServicesScheduling";
import ServicesFAQ from "../ServicesFAQ";
import { Context } from "../Context";

function Services() {
  let information = [
    {
      type: "Venues",
      picture: flowers1,
    },
    {
      type: "Occasions",
      picture: wedding1,
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

  const { value, setValue } = useContext(Context);
  useEffect(() => {
    if (value) {
      setMain(value);
    }
  }, [value]);

  function click(e) {
    if (e.target.innerText == "" || e.target.name) {
      setMain(main);
    }
    setMain(e.target.name);
    setMain(e.target.innerText);
  }

  return (
    <>
      <div
        className="uk-position-relative uk-visible-toggle uk-light section-header"
        tabindex="-1"
        uk-slider="true"
        id="Services"
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-3@m services-ul">
          {information.map((item) => {
            return (
              <li className="uk-list-muted" onClick={click} onMouseOver={click}>
                <div class="item">
                  <div class="polaroid">
                    <img className="image-header-card" src={item.picture} />
                    <div class="caption services-card-name">{item.type}</div>
                  </div>
                </div>
              </li>
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
      {main && <ServicesBody selector={selectorState[main]} />}
    </>
  );
}

export default Services;
