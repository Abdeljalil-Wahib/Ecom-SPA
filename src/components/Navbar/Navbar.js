import logo from "../../assets/logo.svg";
import classes from "./Navbar.module.css";
import cart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";
import Link from "next/link";


const Navbar = ({ClickHandler}) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navigation}>
				<Link href = "/">
        	<img style = {{cursor: 'pointer'}} src={logo.src} alt="" />
				</Link>
        <div className={classes.navLinks}>
          <Link href="/collections">
            <a>Collections</a>
          </Link>
          <Link href="/men">
            <a>Men</a>
          </Link>
          <Link href="/women">
            <a>Women</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <div className={classes.cartProfile}>
        <img onClick={ClickHandler} className={classes.cart} src={cart.src} alt="" />
        <img className={classes.avatar} src={avatar.src} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
