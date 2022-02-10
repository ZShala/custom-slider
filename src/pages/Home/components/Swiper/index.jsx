import React, { useState } from "react";
import "./style.scss";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const ImageSwiper = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((prevState) => (prevState === length - 1 ? 0 : prevState + 1));
  };

  const prevSlide = () => {
    setCurrent((prevState) => (prevState === 0 ? length - 1 : prevState - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider-container">
      <MdOutlineArrowBackIos
        className="left-arrow arrow left"
        onClick={prevSlide}
      />

      <MdOutlineArrowForwardIos
        className="right-arrow arrow right"
        onClick={nextSlide}
      />
      <div className="slider">

        {slides?.map((slide, index) => {
          return (
            <div
              className={`slide ${index === current && "active"} ${
                index < current ? "prev" : index > current ? "next" : ""
              }`}
              key={index}
            >
              <img src={slide.url} alt={slide.title} className="image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSwiper;
