import React from "react";
import classes from "../AboutUs/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>We are sneakers</h2>
      <p className={classes.abt}>ABOUT US</p>
      <p className={classes.content}>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur.
      </p>
    </div>
  );
};

export default AboutUs;
