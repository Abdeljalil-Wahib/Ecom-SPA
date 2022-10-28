import React from "react";
import { useState } from "react";
import classes from "./Carousel.module.css";
import carousel1 from "../../assets/Carousel/carousel1.jpeg";
import carousel2 from "../../assets/Carousel/carousel2.jpeg";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/Bs";

const carousel = [carousel1, carousel2];

const Carousel = () => {
  const [translate, setTranslate] = useState(0);
  let i = (translate / 100) * -1;
  let length = carousel.length;
  const translateHandler = (direction) => {
    if (direction === "right" && i < length - 1) {
      setTranslate((prev) => prev - 100);
    } else if (direction === "right") {
      setTranslate(0);
    } else if (direction === "left" && i > 0) {
      setTranslate((prev) => prev + 100);
    } else if (direction === "left") {
      setTranslate(-100 * (length - 1));
    }
  };

  return (
    <div className={classes.container}>
      <button
        className={classes.leftBtn}
        onClick={() => translateHandler("left")}
      >
        <BsFillArrowLeftCircleFill size={40} />
      </button>
      <div className={classes.imgWrapper}>
        {carousel.map((image, index) => (
          <img
            style={{ transform: `translateX(${translate}% )` }}
            className={classes.carouselImg}
            key={index}
            src={image.src}
            alt=""
          />
        ))}
      </div>
      <button
        className={classes.rightBtn}
        onClick={() => translateHandler("right")}
      >
        <BsFillArrowRightCircleFill size={40} />
      </button>
    </div>
  );
};

export default Carousel;
