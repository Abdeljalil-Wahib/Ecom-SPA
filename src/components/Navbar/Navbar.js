import logo from "../../assets/logo.svg";
import classes from "./Navbar.module.css";
import cart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navigation}>
        <img src={logo.src} alt="" />
        <div className={classes.navLinks}>
          <Link href="/Collections">
            <a>Collections</a>
          </Link>
          <Link href="/Men">
            <a>Men</a>
          </Link>
          <Link href="/Women">
            <a>Women</a>
          </Link>
          <Link href="/About">
            <a>About</a>
          </Link>
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <div className={classes.cartProfile}>
        <img className={classes.cart} src={cart.src} alt="" />
        <img className={classes.avatar} src={avatar.src} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
