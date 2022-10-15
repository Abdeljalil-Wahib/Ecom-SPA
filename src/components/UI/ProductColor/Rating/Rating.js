import React from 'react'
import classes from '../Rating/Rating.module.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


const Rating = ({stars}) => {

  let arr = [];
  const flooredStars = Math.floor(stars)
  
  for (let i = 0; i < 5; i++) {
    if(i < flooredStars) {
      arr.push(<AiFillStar key={i} />);
    } else
      arr.push(<AiOutlineStar key={i} />);
  }
 
  return (
    <div className={classes.stars}>
      {arr}
    </div>
  )
}

export default Rating