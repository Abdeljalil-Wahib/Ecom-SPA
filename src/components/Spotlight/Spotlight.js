import React from "react";
import classes from "../Spotlight/Spotlight.module.css";

import spotlight1 from "../../assets/Spotlight/spotlight1.jpg";
import spotlight2 from "../../assets/Spotlight/spotlight2.jpeg";
import spotlight3 from "../../assets/Spotlight/spotlight3.jpg";
import spotlight4 from "../../assets/Spotlight/spotlight4.jpg";
import Link from "next/link";

const spotlights = [spotlight1, spotlight2, spotlight3, spotlight4];

const Spotlight = () => {
  return (
    <div className={classes.container}>
      {/* {spotlights.map((image, index) => (
        <div>
        <img className={classes.img} key={index} src={image.src} alt="product spotlight" />
        <div></div>
        </div>
      ))}
       */}
      <div className={classes.row1}>
        <div className={classes.spotlight}>
          <Link href="">
            <a className={classes.txtRepo}>SHOP HIGH FASHION</a>
          </Link>
          <img
            className={classes.sptlightImg}
            src={spotlight1.src}
            alt="high fashion spotlight"
          />
        </div>
        <div className={classes.spotlight}>
          <Link href="">
            <a className={classes.txtRepo}>SHOP CASUALWEAR</a>
          </Link>
          <img
            className={classes.sptlightImg}
            src={spotlight2.src}
            alt="casual wear spotlight"
          />
        </div>
      </div>
      <div className={classes.row2}>
        <div className={classes.spotlight}>
          <Link href="">
            <a className={classes.txtRepo}>SHOP ACCESSORIES</a>
          </Link>
          <img
            className={classes.sptlightImg}
            src={spotlight3.src}
            alt="high fashion spotlight"
          />
        </div>
        <div className={classes.spotlight}>
          <Link href="">
            <a className={classes.txtRepo}>SHOP CASUALWEAR</a>
          </Link>
          <img
            className={classes.sptlightImg}
            src={spotlight4.src}
            alt="high fashion spotlight"
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
