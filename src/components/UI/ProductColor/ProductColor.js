import React, { useState } from "react";
import classes from "../ProductColor/ProductColor.module.css";

const ProductColor = ({ colors, setColor }) => {
  const [current, setCurrent] = useState();
  const [hover, setHover] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const clickHandler = (index, id) => {
    setColor(id);
    setCurrent(index);
  };

  const mouseLeaveHandler = () => {
    setShowPopup(false);
  };
  const mouseEnterHandler = (index) => {
    setShowPopup(true);
    setHover(index);
  };

  return (
    <div className={classes.container}>
      {colors?.map((color, index) => (
        <div key={color.id}>
          <span
            className={
              classes.popup +
              " " +
              (showPopup === true && hover === index
                ? classes.popupActive
                : classes.popupInactive)
            }
          >
            {color.color}
          </span>
          <div
            className={classes.color}
            style={{
              background: color.color,
              outlineColor: current === index ? "black" : "lightgray",
            }}
            onClick={() => clickHandler(index, color.id)}
            onMouseOver={() => mouseEnterHandler(index)}
            onMouseLeave={mouseLeaveHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductColor;
