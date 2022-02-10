import React, { useState } from "react";
import "./style.scss";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const ImageSwiper = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <MdOutlineArrowBackIos className="left-arrow" onClick={prevSlide} />

      <MdOutlineArrowForwardIos className="right-arrow" onClick={nextSlide} />

      {slides?.map((slide, index) => {
        return (
          <div className={`slide ${index === current && "active"}`} key={index}>
            {index === current && (
              <img src={slide.url} alt={slide.title} className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSwiper;
