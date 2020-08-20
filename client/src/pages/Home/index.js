import React from "react";
import InstagramContainer from "../../components/InstagramContainer";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <InstagramContainer />
    </div>
  );
}

export default Home;
