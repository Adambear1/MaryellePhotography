import React from "react";
import "./styles.css";

import ServicesFAQGeneral from "../ServicesFAQGeneral";
import ServicesFAQStyling from "../ServicesFAQStyling";
import ServicesFAQPostProduction from "../ServicesFAQPostProduction";

function ServicesFAQ() {
  return (
    <>
      <h2 className="cluster-header" id="Faq">
        FAQ
      </h2>

      <ServicesFAQGeneral />

      <ServicesFAQStyling />

      <ServicesFAQPostProduction />
    </>
  );
}

export default ServicesFAQ;
