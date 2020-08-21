import React, { useState } from "react";
import "./styles.css";
import ServicesVenue from "../ServicesVenue";
import ServicesOccasions from "../ServicesOccasions";
import ServicesBody from "../ServicesBody";
import ServicesScheduling from "../ServicesScheduling";

function Services() {
  let information = [
    {
      type: "Venues",
      picture:
        "https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png",
    },
    {
      type: "Occasions",
      picture:
        "https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png",
    },
    {
      type: "Scheduling",
      picture:
        "https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png",
    },
    {
      type: "FAQ",
      picture:
        "https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png",
    },
  ];
  const [main, setMain] = useState();
  const [selectorState, setSelectorState] = useState({
    Venues: <ServicesVenue />,
    Occasions: <ServicesOccasions />,
    Scheduling: <ServicesScheduling />,
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
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="true"
      >
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-3@m">
          {information.map((item) => {
            return (
              <li>
                <img src={item.picture} alt="" />
                <div class="uk-position-center uk-panel">
                  <h1
                    className="services-card-name"
                    onClick={click}
                    onMouseOver={click}
                  >
                    {item.type}
                  </h1>
                </div>
              </li>
            );
          })}
        </ul>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slider-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
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
