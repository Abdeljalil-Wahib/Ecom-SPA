import React from "react";
import classes from "../SideDrawer/SideDrawer.module.css";

const SideDrawer = ({ ClickHandler, children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sideDrawer}>{children}</div>
      <div onClick={ClickHandler} className={classes.backdrop}></div>
    </div>
  );
};

export default SideDrawer;
