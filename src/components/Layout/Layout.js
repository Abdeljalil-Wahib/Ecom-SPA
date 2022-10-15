import Navbar from "../Navbar/Navbar";
import SideDrawer from "../UI/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";
import { useState } from "react";


const Layout = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  
  const ClickHandler = () => {
    setShowCart(current => !current);
  }
  return (
    <div className={classes.Layout}>
        {showCart && <SideDrawer ClickHandler={ClickHandler}/>}
      <div className={classes.container}>
        <Navbar ClickHandler={ClickHandler}/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
