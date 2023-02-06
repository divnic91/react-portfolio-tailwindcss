import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newslatter from "./components/Newslatter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newslatter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
