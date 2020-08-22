import React from "react";
import PortfolioInstagram from "../PortfolioInstagram";
import PortfolioTestimonies from "../PortfolioTestimonies";
import PortfolioMissionStatement from "../PortfolioMissionStatement";
import "./styles.css";

function Portfolio() {
  return (
    <>
      <PortfolioInstagram />
      <PortfolioMissionStatement /> <PortfolioTestimonies />
    </>
  );
}

export default Portfolio;
