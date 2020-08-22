import React from "react";
import InstagramContainer from "../../components/InstagramContainer";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Services from "../../components/Services";
import BookNow from "../../components/BookNow";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div class="uk-container">
        <Services />
        <BookNow />
        <InstagramContainer />
      </div>
    </div>
  );
}

export default Home;
