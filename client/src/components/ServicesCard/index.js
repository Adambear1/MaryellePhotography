import React from "react";

function ServicesCard(props) {
  return (
    <div class="uk-card uk-card-hover uk-card-body ">
      <h3 class="uk-card-title">{props.title}</h3>
      <p>{props.about}</p>
    </div>
  );
}

export default ServicesCard;
