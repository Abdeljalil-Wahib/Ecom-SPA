import React from "react";
import classes from "../SideDrawer/SideDrawer.module.css";

const SideDrawer = ({ ClickHandler }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sideDrawer}></div>
      <div onClick={ClickHandler} className={classes.backdrop}></div>
    </div>
  );
};

export default SideDrawer;
