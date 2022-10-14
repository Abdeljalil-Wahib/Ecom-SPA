import { useState } from "react";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
	const [showCart, setshowCart] = useState(false)

	const cartShowHandler = () => {
		setshowCart(prev => !prev)
	}
	
  return (
    <div className={classes.Layout}>
			{showCart && <Cart cartClicked = {cartShowHandler}/>}
			<div className = {classes.innerlayout}>
				<Navbar cartClicked = {cartShowHandler}/>
				{children}
			</div>
    </div>
  );
};

export default Layout;
