import React from "react";
import picture from "./images/picture-girl-mountain.jpg";
import "./styles.css";

function PortfolioTestimonies() {
  let testimonials = [
    {
      name: "Adam Birgenheier",
      date: "July 21, 2018",
      type: "Senior Photos",
      compliment:
        "I worked with Maryelle a few times and she has done and amazing job every time. I highly recommend each and everybody to reach out and tell her what you are looking for. Her artistic skills paired with her natural talents cannot be compared! 10/10",
    },
    {
      name: "Ale James",
      date: "March 3, 2020",
      type: "Personal Photos",
      compliment:
        "High-quality customer service. Very flexible. Very friendly. The photos turned out amazing and could not ask for anything more!",
    },
  ];
  return (
    <>
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin margin-fit-testimonies"
        uk-grid="true"
      >
        <div
          class="uk-card-media-left uk-cover-container"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
        >
          <img
            src={picture}
            className="testimonial-image"
            alt=""
            uk-cover="true"
          />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div
            class="uk-card-body"
            uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
          >
            <h1 class="uk-card-title">Testimonials</h1>
            <ul>
              {testimonials.map((item) => {
                return (
                  <>
                    <li
                      className="testimonial-name uk-grid-row-small"
                      uk-grid="true"
                    >
                      <h4>{item["name"]}</h4>
                    </li>
                    <li
                      className="testimonial-name uk-grid-row-small"
                      uk-grid="true"
                    >
                      <h5>
                        {item["type"]}
                        {"    "}
                        {item["date"]}
                      </h5>
                    </li>

                    <li className="testimonial-compliment uk-grid-row-small">
                      <p>{item["compliment"]}</p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioTestimonies;
