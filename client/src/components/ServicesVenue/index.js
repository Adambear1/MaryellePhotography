import React from "react";
import ServicesCard from "../ServicesCard";
import "./styles.css";

function ServicesVenue() {
  let services = [
    {
      title: "Venues",
      about:
        "asdasdadqnj n3 32noe 23ioj qjnd qekn 3qi eniqowi nqo enk oqji eq oi3 noi2 ji2",
    },
    {
      title: "Venues",
      about:
        "asdasdadqnj n3 32noe 23ioj qjnd qekn 3qi eniqowi nqo enk oqji eq oi3 noi2 ji2",
    },
    {
      title: "Venues",
      about:
        "asdasdadqnj n3 32noe 23ioj qjnd qekn 3qi eniqowi nqo enk oqji eq oi3 noi2 ji2",
    },
    {
      title: "Venues",
      about:
        "asdasdadqnj n3 32noe 23ioj qjnd qekn 3qi eniqowi nqo enk oqji eq oi3 noi2 ji2",
    },
    {
      title: "Venues",
      about:
        "asdasdadqnj n3 32noe 23ioj qjnd qekn 3qi eniqowi nqo enk oqji eq oi3 noi2 ji2",
    },
    {
      title: "Venues",
      about:
        "asdasdadqnj n3 32noe 23ioj qjnd qekn 3qi eniqowi nqo enk oqji eq oi3 noi2 ji2",
    },
  ];
  return (
    <>
      <h2 className="cluster-header" id="venues">
        Venues
      </h2>
      <div
        className="uk-child-width-1-3@m uk-grid-match uk-margin-medium margin-fit-venues"
        uk-grid="true"
        id="portfolio-section"
        uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 100; repeat: false"
      >
        {services.map((item) => {
          return <ServicesCard title={item.title} about={item.about} />;
        })}
      </div>
    </>
  );
}

export default ServicesVenue;
