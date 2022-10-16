import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
	const showCart = useSelector(state => state.ui.cartIsVisible)
	
  return (
    <div className={classes.Layout}>
			{showCart && <Cart/>}
			<div className = {classes.innerlayout}>
				<Navbar />
				{children}
			</div>
    </div>
  );
};

export default Layout;
