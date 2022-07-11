import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import Music from "../components/MusicSection/Music";
import Tour from "../components/TourSection/Tour";
import Merch from "../components/MerchSection/Merch";
import About from "../components/AboutSection/About";
import Footer from "../components/Footer/Footer";
import Slider from "../components/SliderSection/Slider";

import TShirtBlack from "../images/tshirtblack.png";
import TShirtBlue from "../images/tshirtblue.png";
import TShirtWhite from "../images/tshirtwhite.png";

const config = [
  { title: "TshirtBlack", image: { TShirtBlack } },
  { title: "TshirtBlue", image: { TShirtBlue } },
  { title: "TshirtWhite", image: { TShirtWhite } },
];

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Music />
      <Tour />
      <Merch />
      {/* <Slider config={config} /> */}
      <About />
      <Footer />
    </>
  );
};

export default Homepage;
