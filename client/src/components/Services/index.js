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
      id: "Venues",
    },
    {
      type: "Occasions",
      picture: wedding1,
      id: "Occasions",
    },
    {
      type: "Scheduling",
      picture: notepad,
      id: "Scheduling",
    },
    {
      type: "FAQ",
      picture: question,
      id: "Faq",
    },
  ];
  const [main, setMain] = useState();
  const [selectorState, setSelectorState] = useState({
    Venues: <ServicesVenue />,
    Occasions: <ServicesOccasions />,
    Scheduling: <ServicesScheduling />,
    Faq: <ServicesFAQ />,
  });

  const { value, setValue } = useContext(Context);
  useEffect(() => {
    if (value) {
      console.log(value);
      setMain(value);
    }
  }, [value]);

  function click(e) {
    if (e.target.innerText == "Venues") {
      setMain("Venues");
    }
    if (e.target.innerText == "Occasions") {
      setMain("Occasions");
    }
    if (e.target.innerText == "Scheduling") {
      setMain("Scheduling");
    }
    if (e.target.innerText == "FAQ") {
      setMain("Faq");
    }
  }

  return (
    <>
      <div
        className="uk-position-relative uk-visible-toggle uk-light section-header"
        tabIndex="-1"
        uk-slider="true"
        id="Services"
        key="default_2"
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-3@m services-ul">
          {information.map((item) => {
            return (
              <li
                className="uk-list-muted"
                onClick={click}
                onMouseOver={click}
                key={item.type}
              >
                <div className="item">
                  <div className="polaroid">
                    <img className="image-header-card" src={item.picture} />
                    <div id={item.id} className="caption services-card-name">
                      {item.type}
                    </div>
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
