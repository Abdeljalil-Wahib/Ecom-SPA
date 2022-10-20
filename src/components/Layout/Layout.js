import Navbar from "../Navbar/Navbar";
import SideDrawer from "../UI/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";


const Layout = ({ children }) => {
  const showCart = useSelector(state => state.ui.cartVisible) 
  return (
    <div className={classes.Layout}>
      {showCart && (
        <SideDrawer >
          <Cart />
        </SideDrawer>
      )}
      <div className={classes.container}>
        <Navbar  />
        {children}
      </div>
    </div>
  );
};

export default Layout;
