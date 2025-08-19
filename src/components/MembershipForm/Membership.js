import React from "react";
import classes from "../MembershipForm/Membership.module.css";
import Link from "next/link";

const Membership = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Explore our Membership</h2>
      <p className={classes.para}>Get that new clothes feeling every month with a monthly membership. We have a plan that's right for you and your budget.</p>
      <Link href="" className={classes.linkBtn}>
        LEARN MORE
      </Link>
    </div>
  );
};

export default Membership;