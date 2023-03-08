import React from "react";
import "./App.css";

import Features from "./Components/Features";
import Navabar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Connection from "./Components/Connection";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navabar />
      <Hero />
      <Features />
      <Connection />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
