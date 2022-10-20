import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import classes from "../SideDrawer/SideDrawer.module.css";

const SideDrawer = ({ children }) => {
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(uiActions.toggleCart())
   }
   
  return (
    <div className={classes.container}>
      <div className={classes.sideDrawer}>{children}</div>
      <div onClick={clickHandler} className={classes.backdrop}></div>
    </div>
  );
};

export default SideDrawer;
