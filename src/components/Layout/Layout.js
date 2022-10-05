import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
