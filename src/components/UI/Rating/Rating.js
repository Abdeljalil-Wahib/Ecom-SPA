import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import classes from './Rating.module.css'

const Rating = ({rating}) => {
	let arr = []
	let floorrate = Math.floor(rating.rate)
	for (let i = 0; i < 5; i++) {
		if (i < floorrate)
			arr.push(<AiFillStar style = {{width: '20px', height: '20px', color: 'orange'}}/>)
		else
			arr.push(<AiOutlineStar style = {{width: '20px', height: '20px'}}/>)
	}
	return (
		<div className = {classes.ratingswrapper}>
			{arr}
		</div>
	)
}

export default Rating