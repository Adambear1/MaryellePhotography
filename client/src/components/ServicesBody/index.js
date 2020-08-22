import React from "react";

function ServicesBody(props) {
  return (
    <div className="uk-height-medium">
      <div uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper">
        <div className="uk-grid-medium" uk-grid="true"></div>
        {props.selector}
      </div>
    </div>
  );
}

export default ServicesBody;
