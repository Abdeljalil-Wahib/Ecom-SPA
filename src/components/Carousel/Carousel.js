import React from "react";
import { useState } from "react";

import classes from "./Carousel.module.css";
import carousel1 from "../../assets/Carousel/carousel1.jpg";
import carousel2 from "../../assets/Carousel/carousel2.jpg";
import carousel3 from "../../assets/Carousel/carousel3.jpg";
import carousel4 from "../../assets/Carousel/carousel4.jpg";

const carousel = [carousel1, carousel2, carousel3, carousel4];

const Carousel = () => {
  const [translate, setTranslate] = useState(0);
  let i = (translate/100) * -1;
  const translateHandler = (direction) => {
    console.log(i)
    if (direction === 'right' && i < carousel.length-1 ) {
      setTranslate(prev => prev-100)
      console.log("test ", 1)

    } else if (direction === 'right') {
      console.log("test ", 2)
      setTranslate(0);
    }
    else if ((direction === 'left' && i > 0)) {
      setTranslate(prev => prev+100)
      console.log("test ", 3)
    }
    else if (direction === 'left') {
      setTranslate(-100 * (carousel.length-1))
      console.log("test ", 4)
    }
  }
  
  return (
    <div className={classes.container}>
        <button className={classes.leftBtn} onClick={() => translateHandler('left')}>LEFT</button>
      <div className={classes.imgWrapper}>
        {carousel.map((image, index) => (
          <img style={{transform: `translateX(${translate}% )`}} className={classes.carouselImg} key={index} src={image.src} alt="" />
        ))}
      </div>
      <button className={classes.rightBtn} onClick={() => translateHandler('right')}>RIGHT</button>
    </div>
  );
};

export default Carousel;
