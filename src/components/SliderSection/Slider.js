import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  console.log(currentSlide);

  if (!Array.isArray(slides) || slides.length <= 0) {
    //no data or no array, doesnt return anything
    return null;
  }

  return (
    <div className="slider_container" id="merch">
      <section className="slider">
        <FaArrowLeft className="left_arrow" onClick={previousSlide} />
        <FaArrowRight className="right_arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide active" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <img src={slide.image} alt="slide" className="image" />
              )}
            </div>
          );
        })}
      </section>
      <button
        className="slide_button"
        onClick={() =>
          (window.location =
            "mailto:stagerunnerz@gmail.com?subject=Order Stagerunnerz Merch&body=I would like to order a T-Shirt. Color: ---fill in color here---, Size: ---fill in size here---, Quantity: ---fill in quantity here---, Message: ---fill in message here---, and your name: ---fill in name here---")
        }
      >
        Buy Now
      </button>
    </div>
  );
};

export default Slider;
