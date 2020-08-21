import React from "react";
import ServicesCard from "../ServicesCard";

function Services() {
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
  ];
  return (
    <div uk-grid="masonry: true">
      <div class="uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l">
        <div class="uk-child-width-expand@s uk-text-center">
          {services.map((item) => {
            return <ServicesCard title={item.title} about={item.about} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
