import React from "react";
import "./App.css";

import Features from "./Components/Features";
import Navabar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <div>
      <Navabar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
