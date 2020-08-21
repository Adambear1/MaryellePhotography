import React from "react";
import InstagramContainer from "../../components/InstagramContainer";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Services from "../../components/Services";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div class="uk-container">
        <Services />
        <InstagramContainer />
      </div>
    </div>
  );
}

export default Home;
