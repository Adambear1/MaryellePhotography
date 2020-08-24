import React, { useState, useMemo } from "react";
import { Context } from "./components/Context";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

function App() {
  const [value, setValue] = useState(null);
  const _val = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <>
      <Context.Provider value={_val}>
        <Navbar />
        <Jumbotron />
        <Home />
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
