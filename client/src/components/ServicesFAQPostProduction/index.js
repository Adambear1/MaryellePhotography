import React from "react";
import flowers from "./images/flowers.jpg";
import flowers1 from "./images/flowers1.jpg";

function ServicesFAQPostProduction() {
  let postProductionQA = [
    {
      index: 0,
      Q: "Do you touch up all the images in our image download?",

      A:
        "Yes we do. Every image we deliver is post produced with our unique signature style of post-production. This involves color correction, exposure adjustment, selective black and white processing, clarity adjustments, tone-mapping, and other corrections. Many photographers will not post produce any images, or will only post produce “select” images from your wedding. This means that you may have pictures that are too dark, have strange skin tones or other common photography flaws.",
    },
    {
      index: 1,
      Q: " What do you mean by “touching up” the photos?",

      A:
        "Touching up in our studio is the same as our signature (standard) post-production. See the question below for clarification.",
    },
    {
      index: 2,
      Q:
        "What is the difference between advanced and custom; and why are there additional costs for a custom retouch?",

      A:
        "Advanced post-production includes touch-ups such as removal of blemishes, removal of bags under eyes, removal of fly-away hairs, etc. On the other hand, custom post production is anything that requires extensive, custom work in Photoshop such as removing entire objects from the scene, changing the size and shape of body parts or other objects in the scene, adding objects to a scene and other custom work. We charge hourly for the custom post-production as the time required ranges depending on the complexity of the project. Please contact our studio manager for a quote for custom post-production.",
    },
    {
      index: 3,
      Q: "Do you shoot in JPEG, Small Raw, or Large Raw?",

      A:
        "We shoot most of our images in Small Raw with certain situations where we move to Large Raw. For our reasoning, please see this section on the Photography Misconceptions page of our website: Small Raw Vs. Large Raw",
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
          <img src={flowers} className="FAQ-image" alt="" uk-cover="true" />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Post Production</h3>
            <ul>
              {postProductionQA.map((item) => {
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
          <img src={flowers1} alt="" uk-cover="true" className="FAQ-image" />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Post Production Cont.</h3>
            <ul>
              {postProductionQA.map((item) => {
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

export default ServicesFAQPostProduction;
