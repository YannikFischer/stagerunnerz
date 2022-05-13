import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import Music from "../components/MusicSection/Music";
import Tour from "../components/TourSection/Tour";
import Merch from "../components/MerchSection/Merch";
import About from "../components/AboutSection/About";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Music />
      <Tour />
      <Merch />
      <About />
      <Footer />
    </>
  );
};

export default Homepage;
