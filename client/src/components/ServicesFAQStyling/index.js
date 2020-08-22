import React from "react";
import lightHouse from "./images/lighthouse.jpg";
import whiteFlowers from "./images/whiteFlowers.jpg";

function ServicesFAQStyling() {
  let stylingQA = [
    {
      index: 0,
      Q: "What is your philosophy regarding photography?",

      A: "Please click here for details on our wedding photography philosophy.",
    },
    {
      index: 1,
      Q: "What is your photography style?",

      A:
        "The Lin and Jirsa Wedding Photography team is acclaimed for developing a unique style of wedding photography that is deeply rooted in wedding photojournalism while influenced by fine-art and fashion photography. We love using creative lighting, unique perspectives, angles, compositions and artistic post-production refining to bring out our clients personalities and beauty while telling their wedding story. We pride ourselves on not just being photographers, but rather artists creating unique and expressive imagery. To see examples of our quality and style, please visit our Portfolio as well as our Blog.",
    },
    {
      index: 2,
      Q: "Can I see a full event from start to finish?",

      A:
        " Of course you may! We pride ourselves on the consistency of our work. We understand all photographers post their best shots from each wedding on their websites so it’s hard to determine how well he or she will perform on the wedding day. That is why we encourage all of our potential clients to view full events from all photographers they meet with to see how well the photographer performs throughout the day.",
    },
    {
      index: 3,
      Q:
        "My venue is very dark. How does your studio handle these situations and can I see samples?",

      A:
        "We have shot in the darkest of dark chapels and reception halls so no need to worry! If the situation allows, we will set up additional lighting to ensure we get focused pictures. Some chapels do not allow for flash photography; and for that reason, we shoot on camera’s with superb low-light performance and lenses with low apertures (check out our Toolkit here).",
    },
    {
      index: 4,
      Q: "Is there a style or quality difference among the photographers?",

      A:
        "No. We take every measure to ensure consistent style and quality among our photographers. We have developed the unique style you see in our work over the years. Each shoot is reviewed to ensure our quality and style are consistent. All mistakes, no matter how minor, are scrutinized by the team. We trust that the quality and style of photography you receive will be consistent. However, we do tailor our shooting style and techniques to our client requests. For example, some clients may prefer a light and airy look while others may prefer dramatic lighting and shadows.",
    },
  ];
  return (
    <>
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        uk-grid="true"
      >
        <div
          class="uk-card-media-left uk-cover-container"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
        >
          <img src={lightHouse} className="FAQ-image" alt="" uk-cover="true" />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Styling</h3>
            <ul>
              {stylingQA.map((item) => {
                return (
                  item.index <= 2 && (
                    <>
                      <li className="FAQ-question">
                        <h6>{item["Q"]}</h6>
                      </li>

                      <li className="FAQ-answer">
                        <h6>{item["A"]}</h6>
                      </li>
                    </>
                  )
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        uk-grid="true"
      >
        <div
          class="uk-flex-last@s uk-card-media-right uk-cover-container"
          uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
        >
          <img
            src={whiteFlowers}
            alt=""
            uk-cover="true"
            className="FAQ-image"
          />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Styling Cont.</h3>
            <ul>
              {stylingQA.map((item) => {
                return (
                  item.index > 2 && (
                    <>
                      <li className="FAQ-question">
                        {" "}
                        <h6>{item["Q"]}</h6>
                      </li>

                      <li className="FAQ-answer">
                        <h6>{item["A"]}</h6>
                      </li>
                    </>
                  )
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesFAQStyling;
