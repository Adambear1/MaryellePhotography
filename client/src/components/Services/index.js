import React, { useState } from "react";
import ServicesCard from "../ServicesCard";
import "./styles.css";
import ServicesVenue from "../ServicesVenue";
import ServicesOccasions from "../ServicesOccasions";

function Services() {
  const [main, setMain] = useState();

  function click(e) {
    if (e.target.innerText == "") {
      setMain(main);
    }
    setMain(e.target.innerText);
  }
  console.log(main);

  return (
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="true"
    >
      <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-3@m">
        <li>
          <img
            src="https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png"
            alt=""
          />
          <div class="uk-position-center uk-panel">
            <h1
              className="services-card-name"
              onClick={click}
              onMouseOver={click}
            >
              Services
            </h1>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png"
              alt=""
            />
            <div class="uk-position-center uk-panel">
              <h1
                onClick={click}
                onMouseOver={click}
                className="services-card-name"
              >
                Occasions
              </h1>
            </div>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png"
              alt=""
            />
            <div class="uk-position-center uk-panel">
              <h1
                onClick={click}
                onMouseOver={click}
                className="services-card-name"
              >
                Locations
              </h1>
            </div>
          </div>
        </li>
        <li>
          <div>
            <img
              src="https://media.nesta.org.uk/images/Predictions-2019_Twitter_02.width-1200.png"
              alt=""
            />
            <div class="uk-position-center uk-panel">
              <h1
                onClick={click}
                onMouseOver={click}
                className="services-card-name"
              >
                FAQ
              </h1>
            </div>
          </div>
        </li>
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

      <div className="uk-height-medium">
        <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
          <div className="uk-grid-medium" uk-grid>
            <h1 classNameName="section-header uk-margin-top">Services</h1>
          </div>
          <ServicesVenue />
        </div>
      </div>
    </div>
  );
}

export default Services;
