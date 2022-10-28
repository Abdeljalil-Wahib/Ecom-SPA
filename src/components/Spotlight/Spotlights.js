import React from "react";
import classes from "./Spotlights.module.css";
import spotlight1 from "../../assets/Spotlight/spotlight1.jpg";
import spotlight2 from "../../assets/Spotlight/spotlight2.jpeg";
import spotlight3 from "../../assets/Spotlight/spotlight3.jpg";
import spotlight4 from "../../assets/Spotlight/spotlight4.jpg";
import SpotlightCard from "./SpotlightCards/SpotlightCard";

const spotlightImages = [spotlight1, spotlight2, spotlight3, spotlight4];
const btnText = [
  "SHOP HIGH FASHION",
  "SHOP CASUALWEAR",
  "SHOP ACCESSORIES",
  "SHOP CASUALWEAR",
];

const Spotlights = () => {
  return (
    <div className={classes.container}>
      {spotlightImages.map((image, index) => (
        <SpotlightCard btnText={btnText[index]} image={image.src} key={index} />
      ))}
    </div>
  );
};

export default Spotlights;
