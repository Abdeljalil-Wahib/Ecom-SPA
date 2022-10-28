import React from "react";
import classes from "./SpotlightCard.module.css";
import Link from "next/link";
import Button from "../../UI/Button/Button";

const SpotlightCard = ({ image, btnText, index }) => {
  return (
    <div key={index} className={classes.container}>
      <div className={classes.spotlight}>
        <img
          className={classes.spotlightImg}
          src={image}
          alt="high fashion spotlight"
        />
        <Link href="/collections">
          <Button
            href="/collections"
            type={"a"}
            body={btnText}
            className={classes.txtRepo}
          />
        </Link>
      </div>
    </div>
  );
};

export default SpotlightCard;
