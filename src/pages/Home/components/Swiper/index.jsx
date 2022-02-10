import React, { useState } from "react";
import "./style.scss";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

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
      <BsFillArrowLeftCircleFill className="left-arrow" onClick={prevSlide} />
      <BsFillArrowRightCircleFill className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={`slide ${index === current && "active"}`}
            key={index}
          >
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
