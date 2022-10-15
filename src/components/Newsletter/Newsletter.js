import React from "react";
import classes from "../Newsletter/Newsletter.module.css";
import Link from "next/link";

const Newsletter = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Sign-up for our Newsletter</h2>
      <p className={classes.para}>
        Stay informed about the latest style advice and product launches. Learn
        more about our emails and our <Link href=""><a className={classes.underline}>Privacy Policy</a></Link>.
      </p>
      <form className={classes.formField}>
        <input className={classes.inputField} type="email" placeholder="enter your email adress" required/>
        <button className={classes.formBtn}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Newsletter;
